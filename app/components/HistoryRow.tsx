import { ImageHistoryItem } from "~/types/ImageHistoryItem";

export default function HistoryRow({url, id, prompt, revisedPrompt}: ImageHistoryItem) {
  return (
    <div key={id} className="historyRow">
      <div className="thumbContainer"><a className="imageLink" href={url} target="_blank"><img src={url} alt={revisedPrompt} className="thumbnail" /></a></div>
      <div>
        <a href={url} target="_blank"><div className="prompt">{prompt}</div></a>
        <div className= "revisedPrompt">AI revised prompt: {revisedPrompt}</div>
      </div>
    </div>
  )
} 