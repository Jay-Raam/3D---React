import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Iron from "./ui/Iron";
import "./styles/styles.css";

const Four = () => {
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
          <Iron />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
};

export default Four;
