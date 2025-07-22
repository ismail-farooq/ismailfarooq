import { Environment, Float, OrbitControls, Text } from "@react-three/drei";
import { pageAtom, pages } from './UI'
import Book from "./Book";
import { useAtom } from "jotai";
export const Experience = () => {
  const [page] = useAtom(pageAtom);
  let displayText;
  if (page === 0) {
    displayText = "Cover";
  } else if (page === pages.length) {
    displayText = "Back Cover";
  } else {
    displayText = `Page ${page}`;
  }
  return (
    <>
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={2}
        rotationIntensity={2}
      >
        <Book />
      </Float>
      {/* <OrbitControls />  */}
      <Environment preset="studio"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      <Text
        position={[0, -1.8, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
         {displayText}
      </Text>

    </>
  );
};