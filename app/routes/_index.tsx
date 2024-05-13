import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useLoaderData, useNavigation } from "@remix-run/react";
import { json } from "@remix-run/node";
import OpenAI from "openai";
import fs from 'node:fs/promises'
import type { APIError } from "openai/error.mjs";
import type { ImageHistoryItem } from '../types/ImageHistoryItem'
import HistoryRow from "~/components/HistoryRow";

export const meta: MetaFunction = () => {
  return [
    { title: "DALL-E Image Generator" },
    { name: "description", content: "DALL-E Image generator" },
  ];
};

export const loader = async () => {
  try {
    return JSON.parse(await fs.readFile('./history.json', 'utf8')) as ImageHistoryItem[]
  } catch (e) {
    return [] as ImageHistoryItem[]
  }
};

export default function Index() {
  const data = useActionData<typeof action>();
  const history = useLoaderData<typeof loader>();
  const navigation = useNavigation()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>DALL-E Image Generator</h1>
      <Form action="/?index" method="post">
        <label>
          Enter text prompt:<br />
          <textarea rows={3} name="prompt" style={{width: '100%'}}/>
        </label>
        {(data as any)?.error?.message && <div className="error">{(data as any).error.message}</div>}
        <label>
          Size:
          <select name="size"> {['1024x1024', '1792x1024', '1024x1792'].map(size => (
            <option value={size}>{size}</option>
          ))}
          </select>
        </label>
        <div><button disabled={navigation.state != 'idle'} type="submit">Generate Image</button></div>
      </Form>
      <div>Note: Images may be deleted after 1 hour</div>
      {history.map((historyItem) => (
        <HistoryRow {...historyItem} key={historyItem.id} />
        )
      )}
    </div>
  );
}

export async function action({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  const prompt: string = formData.get("prompt") as string;
  console.log (prompt)

  const openai = new OpenAI({apiKey: process.env['OPENAI_API_KEY']})
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: formData.get("size") as any,
    });
    let imageUrl = response?.data[0].url;
    if (imageUrl) {
      const history = await loader()
      history.unshift({prompt, url: imageUrl, id: history.length, revisedPrompt: (response.data[0].revised_prompt as string)})
      await fs.writeFile('./history.json', JSON.stringify(history)) 
      return json({ok: true, imageUrl, error: null})
    } else {
      return json({ ok: false, error: null, imageUrl: null });
    }
  } catch (error) {
    return json({ ok: false, error: (error as APIError).error, imageUrl: null });
  }
  


} 
