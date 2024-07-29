import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/stange.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.MFF_iOS_HER_SST_ANE_B}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.8}
      />
    </group>
  );
}

useGLTF.preload("/stange.gltf");
