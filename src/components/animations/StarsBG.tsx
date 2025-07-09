import { lazy, Suspense } from "react";

const StarsCanvas = lazy(() => import("./StarsCanvas"));

export default function StarsBG() {
  return (
    <Suspense fallback={<div className="fixed inset-0 -z-10 bg-background" />}>
      <StarsCanvas />
    </Suspense>
  );
}
