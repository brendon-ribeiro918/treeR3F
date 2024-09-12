import { Plane } from '@react-three/drei';

export default function Background() {
    return (
        <>
            <Plane args={[20, 20, 5]} position={[0, 0, -30]}>
                <meshStandardMaterial attach='material' color={0xa231a} />
            </Plane>
        </>
    );
}
