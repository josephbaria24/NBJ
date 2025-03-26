"use client"; // Ensure this runs only in the browser

import { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

const GlobeBackground = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: { destroy: () => void }; // Properly typed

    if (typeof window !== "undefined" && globeRef.current) {
      vantaEffect = GLOBE({
        el: globeRef.current,
        THREE, // Ensure three.js is properly passed
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 800.0,
        minWidth: 800.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0, // Dark background
        color: 0xffffff, // White globe
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={globeRef} className="w-full h-full absolute inset-0" />;
};

export default GlobeBackground;