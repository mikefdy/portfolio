import React from "react";
import "../App.css";
import { MovingComponent } from "react-moving-text";
import MyCodeBlock from "./codeblock.js";

export default function Home() {
  const obj =
    " return (\n<div className='container'>\n  <code>\n    <h2>Welcome!</h2>\n    <p>Thanks for joining.\n   Keep on scrolling to get to know me better\n    <p>\n  </code>\n</div>\n   );\n   }\n";
  const name = "Mike Fidanyan(){";
  return (
    <div className="home_container">
      <h1 style={{ color: "white" }}>export default function</h1>

      <MovingComponent
        type="fadeInFromBottom"
        duration="5000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <div className="name">
          <h1>{name}</h1>
        </div>
      </MovingComponent>
      <div className="codeblock">
        <MyCodeBlock
          text={obj}
          language={"jsx"}
          showLineNumbers={true}
          startingLineNumber={1}
          wrapLines={true}
        />
      </div>
    </div>
  );
}
