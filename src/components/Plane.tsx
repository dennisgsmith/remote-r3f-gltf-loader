import { Plane as DreiPlane, GradientTexture } from '@react-three/drei';
import { usePlane } from '@react-three/cannon';

type PlaneProps = {
  colors: Array<string>;
  stops: Array<number>;
  size?: number;
};

const Plane = ({ colors, stops, size = 1024, ...props }: PlaneProps) => {
  const [ref] = usePlane(() => ({ ...props }));

  return (
    <DreiPlane args={[1000, 1000]} ref={ref}>
      <meshBasicMaterial>
        <GradientTexture stops={stops} colors={colors} size={size} />
      </meshBasicMaterial>
    </DreiPlane>
  );
};

export default Plane;
