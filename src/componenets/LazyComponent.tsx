import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

export default function LazyComponent() {
  return (
    <div style={{ width: '500px', height: '500px' }} className='
    cube-container'>
      <h2>Heavy 3D Model</h2>
      <h3>Grab the cube and move it </h3>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Box position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}