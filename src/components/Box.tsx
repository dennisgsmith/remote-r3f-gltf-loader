import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

const Box = () => {
  const boxRef = useRef<Mesh>(null!);
  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef}>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <sphereGeometry args={[1]} />
      <meshStandardMaterial color='orange' wireframe />
    </mesh>
  );
};

export default Box;
