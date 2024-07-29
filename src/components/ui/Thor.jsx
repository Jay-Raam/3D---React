import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/thor.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.MFF_iOS_HER_TOD_AVE_B}
          scale={1.8}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.MFF_iOS_HER_TOD_AVE_W}
          scale={1.8}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/thor.gltf");
