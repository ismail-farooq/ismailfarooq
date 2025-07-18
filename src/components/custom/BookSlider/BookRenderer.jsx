import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";


function BookRenderer() {
  return (
    <div className="book">
      <Loader />
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience></Experience>
          </Suspense>
        </group>
      </Canvas>
      <UI />

    </div>
  );
}

export default BookRenderer;