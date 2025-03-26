// "use client";

// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import VantaDots from "vanta/dist/vanta.dots.min"; // ✅ Import with custom type

// const DotsBackground: React.FC = () => {
//   const vantaRef = useRef<HTMLDivElement | null>(null);
//   const [vantaEffect, setVantaEffect] = useState<VantaDots | null>(null);

//   useEffect(() => {
//     if (typeof window !== "undefined" && vantaRef.current) {
//       setVantaEffect(
//         VantaDots({
//           el: vantaRef.current,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           scale: 1.0,
//           scaleMobile: 1.0,
//           color: 0xffffff,
//           color2: 0xffffff,
//           backgroundColor: 0x000000,
//           size: 3.7,
//           spacing: 25.0,
//           THREE: THREE,
//         })
//       );
//     }

//     return () => {
//       if (vantaEffect) {
//         vantaEffect.destroy();
//         setVantaEffect(null);
//       }
//     };
//   }, [vantaEffect]);

//   return <div ref={vantaRef} className="absolute inset-0 z-0"></div>;
// };

// export default DotsBackground;
