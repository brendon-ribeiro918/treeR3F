import Background from '@/components/Background';
import Tree from '@/components/Tree';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function Home() {
    return (
        <div className='w-screen h-screen'>
            <Canvas className='bg-[#0c2b1d]'>
                <ambientLight />
                <OrbitControls />
                <Tree />
                <Background />
            </Canvas>
        </div>
    );
}
