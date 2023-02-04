import React from 'react';

import { Mesh, MeshStandardMaterial } from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

const URL = 'http://localhost:9000/mybucket/food_lime_01_4k.gltf/food_lime_01_4k.gltf';

type GLTFResult = GLTF & {
  nodes: {
    food_lime_01: Mesh;
  };
  materials: {
    food_lime_01: MeshStandardMaterial;
  };
};

const Lime = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(URL) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.food_lime_01.geometry} material={materials.food_lime_01} />
    </group>
  );
};

useGLTF.preload(URL);

export default Lime;
