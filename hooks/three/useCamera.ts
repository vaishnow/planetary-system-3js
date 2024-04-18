"use client";

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { useEffect, useRef } from "react";
import useScreenSize from "../useScreenSize";

type Props = {
  position?: { x: number; y: number; z: number };
  lookPosition?: { x: number; y: number; z: number };
  height?: number;
  width?: number;
  fov?: number;
  near?: number;
  far?: number;
};

function useCamera({
  position = { x: 5, y: 5, z: 5 },
  lookPosition = { x: 0, y: 0, z: 0 },
  fov = 45,
  height = window.innerHeight,
  width = window.innerWidth,
  near = 1,
  far = 150,
}: Props) {
  const canvasRef = useRef<HTMLDivElement>(null);

  const [scrWidth, scrHeight] = useScreenSize();

  width = width ? width : scrWidth;
  height = height ? height : scrHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(fov, width / height, near, far);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  const controls = new OrbitControls(camera, renderer.domElement);

  camera.position.set(position.x, position.y, position.z);
  camera.lookAt(
    new THREE.Vector3(lookPosition.x, lookPosition.y, lookPosition.z)
  );

  useEffect(() => {
    canvasRef.current?.appendChild(renderer.domElement);
  }, []);

  return { scene, camera, canvasRef, renderer, controls };
}

export default useCamera;
