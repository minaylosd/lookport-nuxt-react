import React, { Fragment, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
export default function () {
  const [screenWidth, setWidth] = useState();
  const [screenHeight, setHeight] = useState();
  const [rendered, setRender] = useState(false);
  let timeout;
  
  useEffect(()=> {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setRender(true);
    const handleResize = ()=> {
      clearTimeout(timeout);
      timeout = setTimeout(()=> {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }, 500)
    };
    window.addEventListener('resize', handleResize);

     return () => {
      window.removeEventListener("resize");
    };
  }, [])
  return (
    <Fragment>
      {rendered && <div className="relative" style={{ width: screenWidth, height: screenHeight }}>
        <Canvas style={{ background: "transparent" }}>
          <Model width={screenWidth} height={screenHeight} />
          <directionalLight intensity={2} position={[0, 2, 3]} />
          <Environment preset="city" />
        </Canvas>
      </div>}
    </Fragment>
  );
}
