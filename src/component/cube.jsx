import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import React, { useRef } from "react";

const Cube = () => {
  const textRef = useRef();

  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach={"background"} args={["#da4ea2"]} />
          <Text fontSize={0.5} color="#fff">
            Hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
