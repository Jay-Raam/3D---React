import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/cap.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.MFF_iOS_HER_SRO_AOU_B}
          scale={1.9}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.MFF_iOS_HER_SRO_AOU_W}
          scale={1.9}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/cap.gltf");
