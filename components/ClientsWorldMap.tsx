'use client';

import { lazy, Suspense, useEffect, useState } from "react";

const LazyMap = lazy(() => import("./ClientsWorldMapInner"));

export default function ClientsWorldMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[600px] w-full rounded-xl border border-lightGray bg-white" />
    );
  }

  return (
    <Suspense
      fallback={
        <div className="h-[600px] w-full rounded-xl border border-lightGray bg-white" />
      }
    >
      <LazyMap />
    </Suspense>
  );
}
