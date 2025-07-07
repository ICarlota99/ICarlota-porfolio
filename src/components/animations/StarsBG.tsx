import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarsBG() {
    return(
        <div className="fixed inset-0 -z-10">
            <Canvas>
                <Stars radius={50} count={400} factor={3} fade speed={2} />
            </Canvas>
        </div>
    );
};