import * as THREE from "three";
import useOrbit from "./useOrbit";
import useSphere from "./useSphere";

type Props = { orbitRadius: number; planetRadius: number };

function usePlanet({ orbitRadius = 5, planetRadius = Math.random() }: Props) {
  const { ring: orbit } = useOrbit({ radius: orbitRadius });
  const { sphere } = useSphere({ radius: planetRadius, orbitRadius });

  const planet = new THREE.Group();
  planet.add(orbit);
  planet.add(sphere);

  const revolve = () => {
    planet.rotateX(-(Math.random() * 0.01));
    planet.rotateZ(-(Math.random() * 0.01));
  };

  return { planet,revolve };
}
export default usePlanet;
