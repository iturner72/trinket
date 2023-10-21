import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const Trinket: React.FC = () => {
    const groupRef = useRef<THREE.Group | null>(null);

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('public');
    console.log('DRACO Loader created');

    const gltfLoader =  new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    // Load the GLB file with the correct relative path
    gltfLoader.load('./../assets/digital_trinket_draco.glb', ( gltf ) => {
        if (groupRef.current) {
            groupRef.current.add(gltf.scene);
        }
    }, undefined, (error) => {
        console.error('Error loading GLB file:', error);
    });

    console.log('GLB file loading...');
    // This hook will rotate the box continuously.
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.x += 0.01;
            groupRef.current.rotation.y += 0.01;
        }
    });

    console.log('Rotation hook active');

    return (
        <group ref={groupRef} />
    );
};

export default Trinket;
