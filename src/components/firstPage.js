import React, { useState } from "react";
import "../App.css";
import { MovingComponent } from "react-moving-text";
import MyCodeBlock from "./codeblock.js";

export default function Home() {
  const obj =
    " return (\n<div className='container'>\n<code>\n <h2>Welcome!</h2>\n    <p>Thanks for joining.\n   Keep on scrolling to get to know me better\n    <p>\n  </code>\n</div>\n   );\n   }\n";
  const name = "Mike_Fidanyan(){";

  return (
    <div className="home_container">
      <h1 style={{ color: "white" }}>export default function</h1>

      <div className="name">
        <h1 style={{ fontWeight: "900" }}>{name}</h1>
      </div>

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
