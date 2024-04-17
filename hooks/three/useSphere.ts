import * as THREE from "three";

type Props = { radius?: number; orbitRadius?: number; color?: string };

function useSphere({
  radius = 1.5,
  orbitRadius,
  color = "#" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10),
}: Props) {
  const geometry = new THREE.SphereGeometry(radius);
  const material = new THREE.MeshBasicMaterial({ color });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.rotateY(Math.random() * radius * 100); // totally random rotation for a random placement on orbit
  orbitRadius && sphere.translateX(orbitRadius);

  return { sphere };
}
export default useSphere;
