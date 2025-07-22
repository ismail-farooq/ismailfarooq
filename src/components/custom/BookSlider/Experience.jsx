import { Environment, Float, OrbitControls, Text } from "@react-three/drei";
import { pageAtom, pages } from './UI'
import Book from "./Book";
import { useAtom } from "jotai";
export const Experience = () => {
  const [page] = useAtom(pageAtom);
  let displayText;

switch (page) {
  case 0:
    displayText = "Hi, 3D World, Open the book to see my projects!";
    break;
  case 1:
    displayText = "This is Mario! Let's-a go!";
    break;
  case 2:
    displayText = "Welcome to RU!";
    break;
  case 3:
    displayText = "Ocean County College — home sweet home.";
    break;
  case 4:
    displayText = "Snap Inc: AR Adventures Await!";
    break;
  case 5:
    displayText = "Mario Movie Poster - Powered by Stanford!";
    break;
  case 6:
    displayText = "Back Cover";
    break;
  default:
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
        rotation={[-Math.PI / 2.1, 0.15, 0.1]}
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