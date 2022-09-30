import Spline from "@splinetool/react-spline";
import { useRef } from "react";

export default function Scene() {
  const scene = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectById("976210e3-1a76-4d88-bef1-dc5c3e9e80e1");
    scene.current = obj;
  }

  function moveObj() {
    console.log(scene.current);
    scene.current.rotation.y += 80;
  }

  return (
    <div className="scene-container">
      <Spline
        scene="https://prod.spline.design/mq7zbAxpi2eykbtO/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
