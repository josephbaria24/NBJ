// "use client"; // ✅ Ensures this runs only in the browser

// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

// const VantaBackground = () => {
//   const vantaRef = useRef(null);
//   const [vantaEffect, setVantaEffect] = useState(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       import("vanta/src/vanta.net").then((NET) => {
//         if (!vantaEffect && vantaRef.current) {
//           setVantaEffect(
//             NET.default({
//               el: vantaRef.current,
//               mouseControls: true,
//               touchControls: true,
//               gyroControls: false,
//               minHeight: 200.0,
//               minWidth: 200.0,
//               scale: 0.9,
//               scaleMobile: 1.0,
//               color: 0xffffff, // ✅ Proper gray color
//               backgroundColor: 0x000000, // ✅ Black background
//               points: 5.00,        // ✅ More nodes (dots)
//               maxDistance: 19.0, // ✅ Shorter connections
//               spacing: 14.0,     // ✅ More spread out
//               THREE: THREE,
              
//             })
            
//           );
          
//         }
//       });
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   return <div ref={vantaRef} className="absolute inset-0 z-0"></div>;
// };

// export default VantaBackground;
