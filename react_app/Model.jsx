import React, { useRef, useEffect, useState, Fragment } from "react";
import { MeshTransmissionMaterial, useGLTF, Text, GradientTexture } from "@react-three/drei";

export default function Model(props) {
  const groupRef = useRef(); // Ссылка на группу объектов
  const firstMesh = useRef(); // Ссылка на первый объект
  const secondMesh = useRef(); // Ссылка на второй объект
  const textGroup = useRef(); // Ссылка на группу с текстом
  const animationRef = useRef();

  const fps = 40;
  const interval = 1000 / fps;
  let lastTime = 0;

  const { nodes } = useGLTF("/three/Logo_1.glb");

  const scrollSpeed = useRef(1); // Начальная скорость вращения
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  let scrollTimeout = useRef(null); // Таймер для сброса скорости

  // Параметры для первого объекта
  const materialProps1 = {
    thickness: 1.50,
    roughness: 0.1,
    transmission: 1,
    ior: 1.3,
    chromaticAberration: 1,
    backside: true,
  };

  // Параметры для второго объекта
  const materialProps2 = {
    thickness: 3,
    roughness: 0.2,
    transmission: 0.8, 
    ior: 1.5, 
    chromaticAberration: 1, 
    backside: false,
    color: "#8000ff", // Цвет для второго объекта
  };

  // Добавляем слушатель на прокрутку
  useEffect(() => {
    const logo = document.getElementById("logo");

    const observer = new IntersectionObserver((entries)=> {
      entries.forEach((entry)=> {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (props.mobile) {
            return;
          }
        } else {
          setIsVisible(false);
          if (props.mobile) {
            return;
          }
          if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
          }
        }
      })
    }, {threshold: 0.25})

    observer.observe(logo);
  }, []);

  // Обработчик для движения мыши
  useEffect(() => {
    const logo = document.getElementById("logo");

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1; // Нормализуем X в диапазон от -1 до 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1; // Нормализуем Y в диапазон от -1 до 1
      mousePosition.current = { x, y };
    };

    logo.addEventListener("mousemove", handleMouseMove);
  }, []);

  const animate = (currentTime) => {
    if (currentTime - lastTime >= interval) {
      if (!isVisible || document.hidden) return; // Останавливаем, если вкладка неактивна
    
      if (firstMesh.current) {
        firstMesh.current.rotation.y += 0.01 * scrollSpeed.current;
      }
    
      if (secondMesh.current) {
        secondMesh.current.rotation.y -= 0.01 * scrollSpeed.current;
      }
    
      if (textGroup.current) {
        textGroup.current.rotation.set(0, 0, 0);
      }
    
      if (groupRef.current) {
        groupRef.current.position.x +=
          (mousePosition.current.x - groupRef.current.position.x) * 0.06;
        groupRef.current.position.y +=
          (mousePosition.current.y - groupRef.current.position.y) * 0.06;
      }
        animationRef.current = requestAnimationFrame(animate);
      }
  };
  
  // Управление запуском/остановкой анимации
  useEffect(() => {
    if (isVisible) {
      animationRef.current = requestAnimationFrame(animate);
    } else if (!isVisible && animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isVisible]);

  return (
    <Fragment>
      <group ref={groupRef}>
        <mesh
          ref={firstMesh} // Ссылка на первый объект
          castShadow
          receiveShadow
          geometry={nodes.Circle005.geometry}
          scale={props.scale}>
          <MeshTransmissionMaterial {...materialProps1} color={"white"} />
        </mesh>

        <mesh
          ref={secondMesh} // Ссылка на второй объект
          castShadow
          receiveShadow
          geometry={nodes.Circle006.geometry}
          scale={props.scale}>
          <MeshTransmissionMaterial {...materialProps2} ior={"0.3"} />
        </mesh>
      </group>

      <group ref={textGroup} position={props.position}>
        
        <Text
          font={"/three/AGLettericaUltraCompressed-Roman.otf"}
          fontSize={props.font}
          text="LET AI HANDLE IT"
          anchorX="center"
          anchorY="bottom">
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 0.5, 1]}
              colors={[0xaaaaaa, 'white', 0xaaaaaa]}
              rotation={-1.72}
              width={props.width/2}
              size={props.height/4}
            />
          </meshBasicMaterial> 
        </Text>
      </group>
    </Fragment>
  );
}

useGLTF.preload("/three/Logo_1.glb");
