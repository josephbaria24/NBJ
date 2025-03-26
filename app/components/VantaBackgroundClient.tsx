"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

const VantaBackgroundClient = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<{ destroy: () => void } | null>(null); // Properly typed

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const effect = GLOBE({
        el: containerRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 800.0,
        minWidth: 800.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0,
        color: 0xffffff,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={containerRef} className="w-full h-full absolute inset-0" />;
};

export default VantaBackgroundClient;