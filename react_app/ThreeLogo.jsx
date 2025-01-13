import React, { Fragment, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
export default function () {
  const [screenWidth, setWidth] = useState(window.innerWidth);
  const [screenHeight, setHeight] = useState(window.innerHeight);
  const [scale, setScale] = useState(window.innerWidth < 640 ? 0.06 : 0.1);
  const [font, setFont] = useState(window.innerWidth < 640 ? 0.7 : 1.4);
  const [position, setPosition] = useState(window.innerWidth < 640 ? [0, -0.11, 0.5] : [0, -0.3, 0.5]);

  let timeout;
  
  useEffect(()=> {
    const handleResize = ()=> {
      clearTimeout(timeout);
      timeout = setTimeout(()=> {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        setScale(window.innerWidth < 640 ? 0.06 : 0.1);
        setFont(window.innerWidth < 640 ? 0.7 : 1.4);
        setPosition(window.innerWidth < 640 ? [0, -0.11, 0.5] : [0, -0.3, 0.5]);
      }, 500)
    };
    window.addEventListener('resize', handleResize);

     return () => {
      window.removeEventListener("resize");
    };
  }, [])
  return (
    <Fragment>
      <div className="relative bg-[radial-gradient(ellipse_50%_30%_at_center,_rgba(35,28,61,1)_0%,_rgba(10,10,10,1)_100%)]" style={{ width: screenWidth, height: screenHeight }}>
        <Canvas style={{ background: "transparent" }}>
          <Model width={screenWidth} height={screenHeight} scale={scale} font={font} position={position} />
          <directionalLight intensity={2} position={[0, 2, 3]} />
          <Environment preset="city" />
        </Canvas>
      </div>
    </Fragment>
  );
}
