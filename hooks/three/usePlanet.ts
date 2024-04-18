import * as THREE from "three";
import useOrbit from "./useOrbit";
import useSphere from "./useSphere";

type Props = { orbitRadius: number; planetRadius: number };

function usePlanet({
  orbitRadius,
  planetRadius = Math.random(),
}: Props): [THREE.Group<THREE.Object3DEventMap>, () => void] {
  const { ring: orbit } = useOrbit({ radius: orbitRadius });
  const { sphere } = useSphere({ radius: planetRadius, orbitRadius });

  const planet = new THREE.Group();
  planet.add(orbit);
  planet.add(sphere);

  // Just making random speeds for planet rotation
  let speed = -Math.random() * 0.015;
  if (Math.random() > 0.5) speed /= 10;

  const revolve = () => {
    planet.rotateY(speed);
  };

  // Giving a slight tilt to Orbits
  planet.rotateZ(Math.random() * 0.07);
  planet.rotateX(Math.random() * 0.07);

  return [planet, revolve];
}
export default usePlanet;
