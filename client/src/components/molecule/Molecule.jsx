import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import molecule from "./Epinephrine.fbx";

export default function Molecule() {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75, 
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1, 
            2000 
        );
        camera.position.z = 400;


        // Create a Three.js renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);

        // Add the renderer to the container
        containerRef.current.appendChild(renderer.domElement);

        // Load the 3D object
        const loader = new FBXLoader();
        loader.load(molecule, (object) => {
            object.rotation.x = Math.PI / 2;
            scene.add(object);
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight1.position.set(0, 1, 0);
            scene.add(directionalLight1);

            const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight2.position.set(0, -1, 0);
            scene.add(directionalLight2);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(-1, 1, 1);
            scene.add(directionalLight);

            const pointLight1 = new THREE.PointLight(0xffffff, 1, 100);
            pointLight1.position.set(-5, 5, 5);
            scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0xffffff, 1, 100);
            pointLight2.position.set(5, -5, 5);
            scene.add(pointLight2);

            // Animate the object
            function animate() {
                object.rotation.z += 0.01;
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            }
            animate();
        });

    // Clean up
        return () => {
            if (container && renderer) {
                container.removeChild(renderer.domElement);
                renderer.dispose();
            }
        };
    }, []);

    return <div ref={containerRef} style={{
        width: '200px', 
        height: '300px',  
    }}/>;
}