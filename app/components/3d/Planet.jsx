"use client";

import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { Suspense, useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 350;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return null;
};

function Scene() {
  const gltf = useLoader(GLTFLoader, "3d/Planet/scene.gltf");
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      // Update the position based on your desired movement logic
      // group.current.rotation.z += 0.001;
      group.current.rotation.y += 0.005;
      group.current.rotation.z = 1;

      //group.current.rotation.x += 0.001;
    }
  });

  return (
    <primitive
      scale={2.5}
      ref={group}
      position={[0, 0, 0]}
      object={gltf.scene}
    />
  );
}

export default function Planet() {
  return (
    <Suspense>
      <div className="h-full w-full lg:w-1/2 hidden lg:block">
        <Canvas className="lg:scale-100 scale-75">
          <Scene />
        </Canvas>
      </div>
    </Suspense>
  );
}
