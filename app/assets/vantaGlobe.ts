declare module "vanta/dist/vanta.globe.min" {
  import { Scene } from "three";

  interface VantaGlobeOptions {
    el: HTMLElement;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    size?: number;
    THREE?: typeof Scene;
  }

  interface VantaGlobeInstance {
    destroy: () => void;
  }

  function VantaGlobe(options: VantaGlobeOptions): VantaGlobeInstance;

  export default VantaGlobe;
}