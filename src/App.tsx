import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'; 
import Trinket from './components/Trinket';
import Box from './components/Box';
import Camera from './components/Camera';
import Lighting from './components/Lighting';

const App: React.FC = () => {
    return (
        <div id="canvas-container">
            <Canvas>
                <Camera />
                <Lighting />
                <Suspense fallback={null}>
                    <Trinket />
                </Suspense>
                <OrbitControls /> 
            </Canvas>
        </div>
    );
};

export default App;
