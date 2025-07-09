import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarsCanvas() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        frameloop="demand"
        gl={{ powerPreference: "low-power", antialias: false }}
      >
        <Stars radius={50} count={450} factor={2} fade speed={1.5} />
      </Canvas>
    </div>
  );
}
