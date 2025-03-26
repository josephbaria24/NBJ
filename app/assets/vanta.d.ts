declare module "vanta/dist/vanta.dots.min" {
    import { Scene } from "three";
  
    interface VantaOptions {
      el: HTMLElement;
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      minHeight?: number;
      minWidth?: number;
      scale?: number;
      scaleMobile?: number;
      color?: number;
      color2?: number;
      backgroundColor?: number;
      size?: number;
      spacing?: number;
      THREE?: typeof Scene;
    }
  
    interface VantaInstance {
      destroy: () => void;
    }
  
    function VantaDots(options: VantaOptions): VantaInstance;
  
    export default VantaDots;
  }
  