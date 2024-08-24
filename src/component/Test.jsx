import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./cube";

const Test = () => {
  return (
    <div className="h-full w-full">
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
};

export default Test;
