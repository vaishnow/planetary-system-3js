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

  const revolve = () => {
    // Just making random speeds for planet rotation
    let speed = -Math.random() * 0.015;
    if (Math.random() > 0.5) speed /= 10;
    planet.rotateY(speed);
  };

  return [planet, revolve];
}
export default usePlanet;
