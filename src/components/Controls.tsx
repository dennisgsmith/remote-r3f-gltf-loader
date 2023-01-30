import { useThree } from '@react-three/fiber';

const Controls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return <orbitControls args={[camera, domElement]} />;
};

export default Controls;
