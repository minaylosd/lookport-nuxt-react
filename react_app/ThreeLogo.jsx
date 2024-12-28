import React, { Fragment } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
export default function () {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <Fragment className="w-full h-full">
      <div className="relative" style={{ width: width, height: height }}>
        <Canvas style={{ background: "transparent" }}>
          <Model />
          <directionalLight intensity={2} position={[0, 2, 3]} />
          <Environment preset="city" />
        </Canvas>
      </div>
    </Fragment>
  );
}
