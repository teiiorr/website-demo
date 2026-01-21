// app/components/three/SceneCanvas.tsx
"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import FloatingShapes from "./FloatingShapes";
import Lights from "./Lights";

export default function SceneCanvas() {
  return (
    <div className="absolute inset-0 z-[2] pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 7], fov: 45 }}
      >
        <Lights />
        <FloatingShapes />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
