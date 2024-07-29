import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/iron.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.MFF_iOS_HER_TST_CWA_A}
          scale={1.8}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.MFF_iOS_HER_TST_CWA_B}
          scale={1.8}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.MFF_iOS_HER_TST_CWA_W}
          scale={1.8}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/iron.gltf");
