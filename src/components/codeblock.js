import { CopyBlock, dracula } from "react-code-blocks";

export default function MyCodeBlock(props) {
  return (
    <CopyBlock
      text={props.text}
      language={props.language}
      showLineNumbers={props.showLineNumbers}
      startingLineNumber={props.startingLineNumber}
      wrapLines={props.wrapLines}
      theme={dracula}
    />
  );
}
