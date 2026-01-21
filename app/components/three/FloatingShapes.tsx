// app/components/three/FloatingShapes.tsx
"use client";

import React, { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type ShapeProps = {
  position: [number, number, number];
  scale: number;
  speed: number;
};

function Shape({ position, scale, speed }: ShapeProps) {
  const ref = React.useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (!ref.current) return;
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.y = t * 0.4;
    ref.current.position.y = position[1] + Math.sin(t) * 0.4;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 48, 48]} />
      <meshStandardMaterial
        color="#ffffff"
        roughness={0.35}
        metalness={0.1}
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

export default function FloatingShapes() {
  const shapes = useMemo<ShapeProps[]>(
    () => [
      { position: [-2.2, 0.4, 0], scale: 0.9, speed: 0.6 },
      { position: [1.8, -0.6, -1], scale: 1.1, speed: 0.45 },
      { position: [0.6, 1.2, -2], scale: 0.7, speed: 0.8 },
    ],
    []
  );

  return (
    <>
      {shapes.map((s, i) => (
        <Shape
          key={i}
          position={s.position}
          scale={s.scale}
          speed={s.speed}
        />
      ))}
    </>
  );
}
