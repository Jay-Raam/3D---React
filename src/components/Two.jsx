import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Challa from "./ui/Challa";
import "./styles/styles.css";

const Two = () => {
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
          <Challa />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
};

export default Two;
