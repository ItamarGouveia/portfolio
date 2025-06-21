"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// @ts-expect-error – FOG não possui tipos compatíveis com TypeScript
import FOG from "vanta/dist/vanta.fog.min";

const VantaBackground = ({ children }: { children: React.ReactNode }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef<ReturnType<typeof FOG> | null>(null);

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const progressInterval = setInterval(() => {
      setProgress((old) => (old < 99 ? old + 1 : old));
    }, 20);

    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x0,
        midtoneColor: 0x098891,
        lowlightColor: 0x002244,
        baseColor: 0x0,
        blurFactor: 0.76,
        speed: 3.3,
        zoom: 0.9,
        onLoad: () => {
          clearInterval(progressInterval);
          setProgress(100);
          setTimeout(() => setLoading(false), 300);
        },
      });

      setTimeout(() => {
        clearInterval(progressInterval);
        setProgress(100);
        setTimeout(() => setLoading(false), 300);
      }, 4000);
    }

    return () => {
      clearInterval(progressInterval);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen z-0">
      <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10" />

      {loading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#00080a] z-50">
          <div className="text-white text-4xl font-bold mb-4">{progress}%</div>
          <div className="w-64 h-2 bg-gray-700 rounded">
            <div
              className="h-full bg-white rounded transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {!loading && <div className="relative z-10">{children}</div>}
    </div>
  );
};

export default VantaBackground;
