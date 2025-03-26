"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

const ThreeScene = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(5, 6, 5);
        
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableZoom = false; // Disable zooming
        controls.mouseButtons.MIDDLE = null; // Disable mouse wheel zoom

        const textureLoader = new THREE.TextureLoader();
        const matcapTexture = textureLoader.load("https://images.unsplash.com/photo-1626908013943-df94de54984c?auto=format&fit=crop&w=2673&q=80");
        const envTexture = textureLoader.load("https://images.unsplash.com/photo-1536566482680-fca31930a0bd?auto=format&fit=crop&w=987&q=80");

        // Create a group to hold the box and light bars
        const group = new THREE.Group();
        scene.add(group);

        const geo = new RoundedBoxGeometry(1, 1, 1, 5, 0.05);
        const mat = new THREE.MeshMatcapMaterial({ matcap: matcapTexture, map: envTexture });
        const mesh = new THREE.Mesh(geo, mat);
        group.add(mesh);

        // LightBar Creation Function
        const createLightBar = (index: number) => {
            const c_mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const c_geo = new THREE.CapsuleGeometry(0.02, 0.5 + Math.random(), 5, 16);
            const c_mes = new THREE.Mesh(c_geo, c_mat);

            c_mes.position.y = -Math.random() * 0.5 + Math.random() * 0.5;
            c_mes.position.x = -Math.sin(index * 0.3) * Math.PI;
            c_mes.position.z = -Math.cos(index * 0.3) * Math.PI;

            group.add(c_mes);
        };

        // Add multiple LightBars to the group
        for (let i = 0; i < 20; i++) {
            createLightBar(i);
        }

        const resize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const animate = () => {
            group.rotation.y += 0.002; // Slower rotation
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            renderer.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

const Home = () => {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <ThreeScene />
        </div>
    );
};

export default Home;
