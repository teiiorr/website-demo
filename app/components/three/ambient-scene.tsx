"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";

export default function AmbientScene() {
  const lowPower = typeof navigator !== "undefined" && navigator.hardwareConcurrency <= 4;

  if (lowPower) return null;

  return (
    <div className="absolute inset-0 -z-10 opacity-60" aria-hidden>
      <Canvas dpr={[1, 1.5]} gl={{ antialias: false }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.7}>
          <Sphere args={[1, 32, 32]} position={[-1.4, 0.5, -1]}>
            <meshStandardMaterial color="#6366f1" wireframe />
          </Sphere>
        </Float>
        <Float speed={0.9} rotationIntensity={0.5} floatIntensity={0.7}>
          <Sphere args={[0.7, 32, 32]} position={[1.2, -0.2, -1]}>
            <meshStandardMaterial color="#22d3ee" wireframe />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}
