import { Mesh, MeshStandardMaterial } from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

const URL = 'http://localhost:9000/mybucket/croissant_4k.gltf/croissant_4k.gltf';

type GLTFResult = GLTF & {
  nodes: {
    croissant: Mesh;
  };
  materials: {
    croissant: MeshStandardMaterial;
  };
};

const Croissant = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF(URL) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.croissant.geometry} material={materials.croissant} />
    </group>
  );
};

useGLTF.preload(URL);

export default Croissant;
