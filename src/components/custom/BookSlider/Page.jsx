import React, { useRef } from 'react'

function Page({ number, front, back, ...props }) {
    const group = useRef();
    return (
        <group {...props} ref={group}>
            <mesh scale={0.1}>
                <boxGeometry />
                <meshBasicMaterial color="blue" />
            </mesh>
        </group>
    )
}

export default Page