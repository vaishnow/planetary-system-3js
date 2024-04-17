import * as THREE from "three";

type Props = {
  radius: number;
};

function useOrbit({ radius = 5 }: Props) {
  const geometry = new THREE.CylinderGeometry(
    radius,
    radius,
    0.05,
    512,
    1,
    true
  );
  const material = new THREE.MeshBasicMaterial({
    color: "#fff",
    side: THREE.DoubleSide,
  });
  const ring = new THREE.Mesh(geometry, material);

  return { ring };
}
export default useOrbit;
