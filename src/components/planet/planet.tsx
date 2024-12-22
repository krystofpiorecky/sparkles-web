"use client";

import "./planet.css";
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useTexture, AccumulativeShadows, RandomizedLight, Decal, Environment, Center, Sphere, OrbitControls } from '@react-three/drei'
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const ANGLE = 80/180*Math.PI;

const useGetScene = (url: string) => {
  const [scene, setScene] = useState<THREE.Group<THREE.Object3DEventMap>>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      new GLTFLoader().load(
        url,
        gltf => {
          setScene(gltf.scene);
        },
        xhr => {
          // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        error => {
          console.log( 'An error happened' );
        }
      );
    }
  }, []);

  return scene;
}

export default function Planet() {
  
  const ref = useRef<HTMLDivElement>(null);
  const scene = useGetScene('/ninja.glb');

  return (
    <div className="planet" ref={ref}>
      <Canvas
        camera={{
          position: [0, 6, 20],
          rotation: [-0.1, 0, 0],
          fov: 15
        }}
        gl={{
          preserveDrawingBuffer: true
        }}>
        {/* <ambientLight intensity={1} /> */}
        {/* <rectAreaLight position={[0, -28, 24]} rotation={[-128, 0, 0]} width={200} height={200} power={1000000} color={"white"} /> */}
        {/* <rectAreaLight position={[-4, -6.6, 6.8]} rotation={[34, -25.5, -16.3]} width={100} height={100} power={250000} color={"white"} /> */}
        {/* <Sphere position={[-4, 6.8, -6.6]} material={mat}/> */}
        <Environment files="/env.hdr" />
        {scene && <primitive object={scene} position={[0, 0, 0]} />}
        {/* <OrbitControls 
          enablePan={false} 
          enableZoom={false}
          minPolarAngle={ANGLE}
          maxPolarAngle={ANGLE}
          autoRotate={true}
        /> */}
      </Canvas>
    </div>
  )
}