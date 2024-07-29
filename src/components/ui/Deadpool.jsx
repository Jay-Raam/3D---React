import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/deadpool.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.COC_iOS_HER_WWI_CLA_B}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2}
      />
    </group>
  );
}

useGLTF.preload("/deadpool.gltf");
