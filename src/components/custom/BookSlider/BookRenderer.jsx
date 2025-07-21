import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";


function BookRenderer({ onHoverStart, onHoverEnd, containerRef }) {
  return (
    <div 
      className="book" 
      onMouseEnter={onHoverStart} 
      onMouseLeave={onHoverEnd}
      ref={containerRef}
    >
      <Loader />
      <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] min-h-[400px]">
        <div className="relative w-full h-full">
          <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <UI />
    </div>
  );
}


export default BookRenderer;