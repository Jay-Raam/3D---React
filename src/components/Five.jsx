import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Stange from "./ui/Stange";
import React from "react";
import "./styles/styles.css";

const Five = () => {
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
          <Stange />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
};

export default Five;
