import React, { useRef } from 'react';
import {useFrame } from '@react-three/fiber'

const Box: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null!);

    // This hook will rotate the box continuously.
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'green'} />
        </mesh>
    );
};

export default Box;
