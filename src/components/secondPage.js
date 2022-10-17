import React from "react";
import "../App.css";

export default function SecondPage() {
  const obj = "Hello_World(){";
  const o = "return(\n";
  const quote =
    "'Jack of all trades, Master of none But often times better than a Master of one'";
  const bracket = ");\n}";
  return (
    <div className="second-container">
      <div className="helloWorld">
        <h1>{obj}</h1>
      </div>
      <div className="second-text">
        <h2>{o}</h2>
        <h4 style={{ margin: "20px" }}>
          {" "}
          <h3>Hi!</h3> I am <span className="second-name">Mike</span>. I am a
          passionate tech guy ;) based in Berlin.Thank you for taking a look at
          my webpage, I appreciate it a lot. I hope you enjoy ! Here a quote I really like: (you will
          understand why later!)
        </h4>
      </div>
      <div
        className="quote-container"
        style={{
          color: "#50fa7b",
          backgroundColor: "#282a36",
          border: "solid 2px #6272a4",
          borderRadius: "30px",
          boxShadow: "0 0 10px #6272a4 ",
          margin: "10px",
        }}
      >
        <h3 style={{ margin: "20px" }}>{quote}</h3>
      </div>
      <h2
        style={{
          color: "white",
          backgroundColor: "#282a36",
          border: "solid 2px #6272a4",
          borderRadius: "10px",
          boxShadow: "2px 5px 20px #6272a4 ",
          margin: "10px",
          marginLeft: "50px",
          width: "30%",
        }}
      >
        {bracket}
      </h2>
    </div>
  );
}
