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
  const [animations, setAnimations] = useState<THREE.AnimationClip[]>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      new GLTFLoader().load(
        url,
        gltf => {
          setScene(gltf.scene);
          setAnimations(gltf.animations);
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

  return { scene, animations };
}

export default function Planet() {
  
  const ref = useRef<HTMLDivElement>(null);
  const { scene, animations } = useGetScene('/ninja.glb');

  return (
    <div className="planet" ref={ref}>
      <Canvas
        camera={{
          position: [0, 5, 20],
          rotation: [-0.05, 0, 0],
          fov: 15
        }}
        gl={{
          preserveDrawingBuffer: true
        }}>
        <SceneContent scene={scene} animations={animations} />
      </Canvas>
    </div>
  )
}

type SceneContentProps = {
  scene?: THREE.Group<THREE.Object3DEventMap>,
  animations?: THREE.AnimationClip[]
};

const SceneContent = ({ scene, animations }: SceneContentProps) => {
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const waveActionRef = useRef<THREE.AnimationAction | null>(null);

  useEffect(() => {
    if (scene === undefined || animations === undefined) return;

    const mixer = new THREE.AnimationMixer(scene);
    mixerRef.current = mixer;

    const waveAction = animations.find((clip) => clip.name === "Wave");
    if (waveAction) {
      waveActionRef.current = mixer.clipAction(waveAction);
    }

    // waveActionRef.current?.reset().play();
  }, [scene]);

  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return <>
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
  </>
}