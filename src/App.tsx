import React from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'; 
import Box from './components/Box';
import Camera from './components/Camera';
import Lighting from './components/Lighting';

const App: React.FC = () => {
    return (
        <div id="canvas-container">
            <Canvas>
                <Camera />
                <Lighting />
                <Box />
                <OrbitControls /> 
            </Canvas>
        </div>
    );
};

export default App;
