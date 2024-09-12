import { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Tree() {
    const [gltf, setGltf] = useState<any>();

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load('/tree.glb', setGltf);
    }, []);

    return (
        <>
            {gltf && (
                <primitive object={gltf.scene} scale={[0.005, 0.005, 0.005]}>
                    <meshStandardMaterial attach='material' color={0x00ff00} />
                </primitive>
            )}
        </>
    );
}
