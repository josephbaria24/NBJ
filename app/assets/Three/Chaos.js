"use client"; // ✅ Ensures this runs only in the browser

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import p5 from "p5";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("vanta/src/vanta.trunk").then((TRUNK) => {
        if (!vantaEffect && vantaRef.current) {
          setVantaEffect(
            TRUNK.default({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0xffffff, // ✅ White lines
              backgroundColor: 0x000000, // ✅ Black background
              chaos: 10.0, // ✅ Intensity of animation
              p5: p5, // ✅ Pass the p5 instance manually
              THREE: THREE, // ✅ Pass Three.js manually
            })
          );
        }
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 z-0"></div>;
};

export default VantaBackground;
