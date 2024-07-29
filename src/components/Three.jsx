import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Deadpool from "./ui/Deadpool";
import "./styles/styles.css";
import { Environment, OrbitControls } from "@react-three/drei";

const Three = () => {
  return (
    <>
      <Canvas>
        <ambientLight intensity={4} />
        <OrbitControls
          maxPolarAngle={Math.PI / 2 - 0.01}
          minPolarAngle={0}
          enableZoom={false}
        />
        <Suspense fallback={null}>
          <Deadpool />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
};

export default Three;
