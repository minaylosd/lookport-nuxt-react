import React, { useRef, useEffect, useState, Fragment } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

export default function Model(props) {
  const groupRef = useRef(); // Ссылка на группу объектов
  const firstMesh = useRef(); // Ссылка на первый объект
  const secondMesh = useRef(); // Ссылка на второй объект
  const textGroup = useRef(); // Ссылка на группу с текстом
  const { nodes } = useGLTF("/three/Logo_1.glb");

  const [scrollSpeed, setScrollSpeed] = useState(1); // Начальная скорость вращения
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  let scrollTimeout = useRef(null); // Таймер для сброса скорости

  // Параметры для первого объекта
  const materialProps1 = useControls({
    thickness: { value: 0.85, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 1, min: 0, max: 1 },
    backside: { value: true },
  });

  // Параметры для второго объекта
  const materialProps2 = useControls({
    thickness: { value: 3, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.2, min: 0, max: 1, step: 0.1 },
    transmission: { value: 0.8, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.5, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 1, min: 0, max: 1 },
    backside: { value: false },
    color: { value: "#8000ff" }, // Цвет для второго объекта
  });

  // Добавляем слушатель на прокрутку
  useEffect(() => {
    const handleScroll = () => {
      setScrollSpeed(5); // Увеличиваем скорость при прокрутке

      // Сбрасываем таймер, чтобы скорость возвращалась к нормальной через 300 мс после остановки прокрутки
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setScrollSpeed(1); // Возвращаем скорость к нормальной
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    }; // Убираем слушатель при размонтировании
  }, []);

  // Обработчик для движения мыши
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1; // Нормализуем X в диапазон от -1 до 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1; // Нормализуем Y в диапазон от -1 до 1
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Анимация вращения и движения
  useFrame(() => {
    if (firstMesh.current) {
      // Вращение первого объекта с учетом текущей скорости
      firstMesh.current.rotation.y += 0.01 * scrollSpeed; // Вращение по Y
    }

    if (secondMesh.current) {
      // Вращение второго объекта с учетом текущей скорости (в противоположную сторону)
      secondMesh.current.rotation.y -= 0.01 * scrollSpeed; // Вращение по Y
    }

    if (textGroup.current) {
      // Фиксация текста в мировой системе координат
      textGroup.current.rotation.set(0, 0, 0); // Убираем вращение
    }

    // Двигаем всю группу объектов в сторону курсора
    if (groupRef.current) {
      // Интерполируем движение модели в сторону курсора
      groupRef.current.position.x +=
        (mousePosition.x - groupRef.current.position.x) * 0.1;
      groupRef.current.position.y +=
        (mousePosition.y - groupRef.current.position.y) * 0.1;
    }
  });

  return (
    <Fragment>
      <group ref={groupRef}>
        <mesh
          ref={firstMesh} // Ссылка на первый объект
          castShadow
          receiveShadow
          geometry={nodes.Circle005.geometry}
          scale={0.1}>
          <MeshTransmissionMaterial {...materialProps1} color={"white"} />
        </mesh>

        <mesh
          ref={secondMesh} // Ссылка на второй объект
          castShadow
          receiveShadow
          geometry={nodes.Circle006.geometry}
          scale={0.1}>
          <MeshTransmissionMaterial {...materialProps2} ior={"0.3"} />
        </mesh>
      </group>

      <group ref={textGroup} position={[0, -0.3, 0.5]}>
        <Text
          font={"/three/PPNeueMontreal-Bold.otf"}
          fontSize={0.6}
          color="white"
          anchorX="center"
          anchorY="bottom">
          Innovation
        </Text>
      </group>
    </Fragment>
  );
}

useGLTF.preload("/three/Logo_1.glb");
