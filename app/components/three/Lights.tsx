// app/components/three/Lights.tsx
"use client";

import React from "react";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 6, 6]} intensity={1.2} />
      <directionalLight position={[-6, -3, 4]} intensity={0.7} />
      <pointLight position={[0, 2, 6]} intensity={1.0} />
    </>
  );
}
