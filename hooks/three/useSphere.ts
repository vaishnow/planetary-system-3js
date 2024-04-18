import * as THREE from "three";

type Props = {
  radius?: number;
  orbitRadius?: number;
  color?: string;
  randomMaterial?: boolean;
};

function useSphere({
  radius = 1.5,
  orbitRadius,
  color = "#" +
    Math.floor(Math.random() * 10) +
    Math.floor(Math.random() * 10) +
    Math.floor(Math.random() * 10),
  randomMaterial = false,
}: Props) {
  const geometry = new THREE.SphereGeometry(radius);

  let material;
  if (randomMaterial) {
    if (Math.floor(Math.random() * 10) === Math.floor(Math.random() * 10)) {
      // A random chance of getting a shiny poke...  planet
      material = new THREE.MeshPhongMaterial({ color, shininess: 100 });
    } else {
      material = new THREE.MeshStandardMaterial({ color });
    }
  } else material = new THREE.MeshBasicMaterial({ color });

  const sphere = new THREE.Mesh(geometry, material);
  sphere.rotateY(Math.random() * radius * 100); // totally random rotation for a random placement on orbit
  orbitRadius && sphere.translateX(orbitRadius);

  return { sphere };
}
export default useSphere;
