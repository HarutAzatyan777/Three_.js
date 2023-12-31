import React from 'react';
import { useSnapshot } from 'valtio';
import { useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        <meshStandardMaterial map={logoTexture} roughness={1} />
        <meshStandardMaterial map={fullTexture} roughness={1} />
      </mesh>
      {/* Other components and UI elements */}
    </group>
  );
};

export default Shirt;
