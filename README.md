# Continue coding assignment

## What project did you work on and why?

I built a simple interface to the DALL-3 image generator. Generative AI for image and artwork has interested me since DALL-E, StableDiffusion, and Midjourney were first made public. Partly for the "ooh pretty pictures" but I've also had a long time interest in computer graphics. I feel that these new tools have given us an enormous potential for creative and imaginative expression and I'm excited to see just what people can create.

To try to get the most out of Continue, I chose to do this project in Remix (which I'm very very new to). I had plenty of "how do I do X?" type questions to ask.

## What did you do manually (without Continue)?

I followed some steps of the Remix tutorial directly, and looked at the OpenAI documentation directly. It seemed to me that those were easily findable and well structured resources that had exactly the info I needed. 

## What did you try to use Continue to do? What worked and what didn’t work with Continue?

All these cases were done with `Claude 3 Sonnet (Free Trial)`.

### Terminal debugging
I tried to ask it to resolve my error messages when the `npx create-remix` command was not working for me. The problem was that I had to go and manually create a specific folder for some reason. Continue was not able to give me this answer but doing a web search was able to help me. *One annoying thing here was that I would select the error message in the terminal but Continue would send the entire contents of the terminal to the AI. This was more context than it needed and only served to confuse the AI (It gave fixes for earlier errors that were already resolved). I created a new terminal and recreated the error to get the hotkey to work properly and only send the context I needed.*

### CSS Codegen
I asked it to generate me some boilerplate CSS to get started. It generated a lot of CSS but it seemed mostly reasonable. I dunno how much of it I really needed -- for a real project I'd probably want to scrutinize it more closely. 


### Remix/HTTP Debugging
I asked how to resolve a *405 Method not allowed* error that I was getting with a form post. The problem was that I had not set my form action to be `/?index` but was using `/` which routes to the `root.tsx` instead of `index.tsx`. This is a quirk of Remix it would seem. Continue understood my query but gave me some generic steps to try to resolve which were not what I needed. I think maybe if I had given the full code as context it might have been better? I again found the fix by searching. 

### TS questions
I asked what my `action` function in remix is supposed to have as its TypeScript return type. Continue was able to give me a coherent example and explanation here and that was enough to get me unstuck. I also asked it for help with some other TS errors and it was able to give me a similarly useful response.

### CSS assistance
I asked it for help getting my images centered to make that "image history" layout in my app. It was able to give me some useful CSS to put in, but I think I should have given it more context and let it write all the layout and CSS together. I just gave CSS only and let it infer the purposes of the classes from their names. It did a good job of this, though I still had to adjust it.

### Remix Loading state
I asked how to show a loading state in Remix (to disable my submit button). It gave me an answer that did not seem to work. I Googled for the API it was talking about but could not find anything about it. This may have been an outdated API. I told it this wasn't working and it gave me another thing to try. The second thing seemed to be from Remix V1, so searching Google for that lead me to a Remix doc explaining the *new* way to do that for Remix V2. This lead me to the right answer and I was able to get unstuck. 

### Remix server side state
Finally, I highlighted some code where I had a module scoped variable in my `_index.tsx` and asked it if the data in the variable would persist through hot code reloads in dev. Here I was surprised that it understood exactly what I was talking about and gave me a coherent and correct (seeming) explanation about why the data would not persist through hot code reloads. I can't verify if it was 100% correct but it did match the behavior I was seeing.

In general I found the autocompletions as I was typing to be more positive than negative, but still mixed. Some were really great and got exactly what I had in mind. Others were not entirely useful, but to me the worst were when the autocomplete output was many lines long and would jump around as I typed. 

Overall, there is some great potential in the tool and some obvious rough spots. I think with practice in using Continue and getting the hang of talking to the AI I could see it being a definite productivity booster.

## What problems do you see with Continue?

A few things just seem like bugs:

- Submitting the entire contents of the terminal and ignoring what I've highlighted when trying to debug terminal errors
- When asking it to refactor code, the new replacement code includes the stuff above the highlighted section, so then when you accept the changes you get the lines above the target section repeated twice. 

It's hard to know if it's giving the right answer sometimes. This is a general problem we have with LLMs today anyway, and not at all specific to Continue. This means it could send you up the wrong tree and you might waste time that way rather than finding some information online written by a human who has actually solved the issue you are encountering.

It's also not always going to be up-to-date as the AI only has knowledge up to a certain point in time. It may not know about the latest changes in APIs and Frameworks.

## What ideas do you have about improving Continue?

Perhaps this is already supported and I just have not learned it yet, but it would be great if there was an easy way to tell it "look at these 3 files for context" when the code in question is spread across a few places. 

Another thing would be to find a better way to display some of the larger autocompletions so that they don't cause the page to jump so much. 

In general I felt like some of the explanations were exceedingly long-winded and as a result I would just scan them looking for the answer. In general if I were asking a coworker these questions they would probably be able to give me 1 sentence answers. While the answers from the AI were very thorough and explanatory, they would end up breaking flow rather than maintaining it because I'd be reading through the example trying to tease out the one little bit I needed. I think the fix here might be to work with the prompt tuning to keep answers concise. I think longer explanations do make sense in follow up questions if I don't understand the short answers.

I would also like to understand a bit better just what is being sent to the AI. Is there any hidden context besides what appears in my query? If there is, I'd like to know (privacy aside, I'd like to know what I'm telling the AI just to communicate effectively). To that end, if there is some hidden context, it'd be nice to be able to drill into the request/result a bit.

# This project uses Remix + Vite

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on supported features.

## Development
You'll need to supply an Open AI API key for this to run. Set your API Key:
```shellscript
$ export OPENAI_API_KEY="<YOUR API KEY HERE>"
```

Then
```shellscript
npm i
```

Run the Vite dev server:

```shellscript
npm run dev
```
