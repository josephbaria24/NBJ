import * as THREE from "https://cdn.skypack.dev/three@0.140.0/build/three.module";
import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/geometries/RoundedBoxGeometry.js";

const texture = {
    matcap: "https://images.unsplash.com/photo-1626908013943-df94de54984c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2673&q=80",
    skin: "https://images.unsplash.com/photo-1560780552-ba54683cb263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    env: "https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
};

const config = {
    scene: {
        speed: 0.005 // Much slower rotation
    },
    object: {
        speed: 0.002 // Much slower object rotation
    }
};


class Control {
    constructor(props) {
        this.controls = new OrbitControls(props.camera, props.canvas);
        this.init();
    }
    init() {
        this.controls.target.set(0, 0, 0);
        this.controls.rotateSpeed = 0.5; // Reduced speed
        this.controls.enableZoom = false; // Disabled zoom
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.update();
    }
    update() {
        this.controls.update();
    }
}

class Space {
    constructor(props) {
        this.canvas = props.canvas || null;
        this.initScene();
    }
    initScene() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.clock = new THREE.Clock();
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(35);
        this.camera.position.set(0, -1.7, 5);
        this.scene.background = new THREE.Color(0x000a0b);
        this.control = new Control({ camera: this.camera, canvas: this.canvas });
        this.object();
        this.render();
        this.loop();
        this.resize();
    }
    object() {
        const o_geo = new RoundedBoxGeometry(1, 1, 1, 5, 0.05);
        const o_mat = new THREE.MeshMatcapMaterial({
            color: 0xffffff,
            matcap: new THREE.TextureLoader().load(texture.matcap),
            map: new THREE.TextureLoader().load(texture.env)
        });
        this.o_mes = new THREE.Mesh(o_geo, o_mat);
        this.scene.add(this.o_mes);
    }
    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    render() {
        const deltaTime = this.clock.getDelta(); // Get frame time difference
        this.scene.rotation.y += deltaTime * config.scene.speed;
        this.o_mes.rotation.y -= deltaTime * config.object.speed;
        this.o_mes.rotation.z += deltaTime * config.object.speed;
        this.o_mes.rotation.x += deltaTime * config.object.speed;
        this.camera.lookAt(this.scene.position);
        this.renderer.render(this.scene, this.camera);
        this.control.update();
    }
    
    loop() {
        this.render();
        requestAnimationFrame(this.loop.bind(this));
    }
}

const canvas = document.querySelector("canvas");
const world = new Space({ canvas });

window.addEventListener("resize", () => world.resize());
window.addEventListener("load", () => world.resize());
