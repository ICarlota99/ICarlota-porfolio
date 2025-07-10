import { lazy, Suspense, useEffect, useState } from "react";
const StarsCanvas = lazy(() => import("./StarsCanvas"));

export default function StarsBG() {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCanvas(true);
    }, 2000); // Delay to avoid blocking FCP
    return () => clearTimeout(timeout);
  }, []);

  return showCanvas ? (
    <Suspense fallback={<div className="fixed inset-0 -z-10 bg-background" />}>
      <StarsCanvas />
    </Suspense>
  ) : null;
}
