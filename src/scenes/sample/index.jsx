import React, { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';

export default function Sample() {
  return (
    <Canvas
      shadows
      gl={{ alpha: false }}
      camera={{ position: [-1, 1, 2.5], fov: 50 }}
    >
      <color attach='background' args={['#cff']} />
      <hemisphereLight intensity={0.35} />
      <directionalLight
        position={[5, 5, 5]}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      />

      <Suspense fallback={null}>
        <Box>
          <meshPhongMaterial attach='material' color='#ff3168' />
        </Box>
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
}
