import { PropsWithChildren } from 'react';
import { Canvas } from '@react-three/fiber';
import Controls from './Controls';

const Scene = ({ children, ...props }: PropsWithChildren) => {
  return (
    <Canvas {...props}>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={5} />
      <axesHelper args={[10]} />
      <Controls />
      {children}
    </Canvas>
  );
};

export default Scene;
