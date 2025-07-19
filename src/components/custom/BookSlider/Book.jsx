import React, { useRef } from 'react'
import { pages } from './UI'

const Page = ({ number, front, back, ...props }) => {
    const group = useRef();

    return (
        <group {...props} ref={group}>
            <mesh scale={1}>
                <boxGeometry />
                <meshBasicMaterial color="blue" />
            </mesh>
        </group>
    );
};


const Book = ({ ...props }) => {
  return (
    <group {...props}>
      {
        pages.map((pageData, index) => (
          <Page key={index} number={index} {...pageData} />
        ))
      }
    </group>
  );
};

export default Book;

