import React from "react";
import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[1, 5, 6]}
        angle={0.15}
        intensity={100}
        penumbra={0.2}
        color="white"
      ></spotLight>

      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        intensity={40}
        penumbra={0.5}
        color="#4cc9f0"
      ></spotLight>
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        intensity={60}
        penumbra={1}
        color="#9d4edd"
      ></spotLight>

      <primitive
        object={new THREE.RectAreaLight("#A259FF", 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      ></primitive>

      <pointLight
        position={[0, 1, 0]}
        intensity={10}
        color="#7209b7"
      ></pointLight>

      <pointLight
        position={[1, 2, -1]}
        intensity={10}
        color="#0d00a4"
      ></pointLight>
    </>
  );
};

export default HeroLights;
