import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/challa.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.COC_iOS_HER_TCH_CWA_B}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2}
      />
    </group>
  );
}

useGLTF.preload("/challa.gltf");
