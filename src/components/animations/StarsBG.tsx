import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarsBG() {
    return(
        <div className="fixed inset-0 -z-50 bg-slate-950">
            <Canvas>
                <Stars radius={50} count={1000} factor={4} fade speed={2} />
            </Canvas>
        </div>
    );
};