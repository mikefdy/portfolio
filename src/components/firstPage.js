import React from "react";
import "../App.css";
import { MovingComponent } from "react-moving-text";

export default function Home() {
  return (
    <div className="home_container">
      <MovingComponent
        type="fadeInFromBottom"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        <div className="name-card">
          <h1 className="name home_text">Mike Fidanyan</h1>
        </div>
      </MovingComponent>

      <p className="home_text">
        Welcome, Thanks for joining! Keep on scrolling to get to know me better{" "}
      </p>
      <div className="home-background-carpet"></div>
    </div>
  );
}
