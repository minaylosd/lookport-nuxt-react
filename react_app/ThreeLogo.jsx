import React, { Fragment, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
export default function () {
  const [screenWidth, setWidth] = useState(window.innerWidth);
  const [screenHeight, setHeight] = useState(screen.availHeight < 1300 ? screen.availHeight : 1300);
  const [scale, setScale] = useState(window.innerWidth < 640 ? 0.06 : 0.1);
  const [font, setFont] = useState(window.innerWidth < 640 ? 0.7 : 1.4);
  const [position, setPosition] = useState(window.innerWidth < 640 ? [0, -0.11, 0.5] : [0, -0.3, 0.5]);

  let timeout;
  
  useEffect(()=> {
    const handleResize = ()=> {
      clearTimeout(timeout);
      timeout = setTimeout(()=> {
        setWidth(window.innerWidth);
        setHeight(screen.availHeight < 1300 ? screen.availHeight : 1300);
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
      <div className="relative overflow-hidden max-h-[1080px]" style={{height: window.innerHeight < 1000? window.innerHeight : 1000}}>
        <div className="absolute left-0 w-full -translate-y-1/2 h-fit top-1/2">
          <div className="relative bg-[radial-gradient(ellipse_50%_30%_at_center,_rgba(35,28,61,1)_0%,_rgba(10,10,10,1)_100%)]" style={{ width: screenWidth, height: screenHeight }}>
            <Canvas style={{ background: "transparent" }}>
              <Model width={screenWidth} height={screenHeight} scale={scale} font={font} position={position} />
              <directionalLight intensity={2} position={[0, 2, 3]} />
              <Environment preset="city" />
            </Canvas>
          </div>
        </div>
      </div>     
    </Fragment>
  );
}
