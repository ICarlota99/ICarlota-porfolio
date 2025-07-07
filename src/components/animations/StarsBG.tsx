import { lazy, Suspense } from "react";

const Canvas = lazy(() => import("@react-three/fiber").then(mod => ({ default: mod.Canvas })));
const Stars = lazy(() => import("@react-three/drei").then(mod => ({ default: mod.Stars })));

export default function StarsBG() {
  return (
    <div className="fixed inset-0 -z-10">
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.5]}
          frameloop="demand"
          camera={{ position: [0, 0, 1], far: 100, near: 1 }}
        >
          <Suspense fallback={null}>
            <Stars radius={30} count={1000} factor={3} fade speed={1} />
          </Suspense>
        </Canvas>
      </Suspense>
    </div>
  );
}
