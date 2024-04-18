"use client";

import { useEffect } from "react";
import useCamera from "@/hooks/three/useCamera";
import usePlanet from "@/hooks/three/usePlanet";
import useSphere from "@/hooks/three/useSphere";

function PlanetarySystem() {
  const { canvasRef, scene, camera, renderer } = useCamera({
    lookPosition: { x: 0, y: 0, z: 5 },
    position: { x: 0, y: 5, z: 20 },
  });

  // Sun
  const { sphere: sun } = useSphere({ color: "#fb2", radius: 2 });
  scene.add(sun);

  // Planets
  const [planet1, p1Start] = usePlanet({ orbitRadius: 4, planetRadius: 0.3 });
  const [planet2, p2Start] = usePlanet({ orbitRadius: 6, planetRadius: 0.6 });
  const [planet3, p3Start] = usePlanet({ orbitRadius: 8, planetRadius: 0.4 });
  const [planet4, p4Start] = usePlanet({ orbitRadius: 10, planetRadius: 0.8 });
  const [planet5, p5Start] = usePlanet({ orbitRadius: 12, planetRadius: 0.6 });

  scene.add(planet1);
  scene.add(planet2);
  scene.add(planet3);
  scene.add(planet4);
  scene.add(planet5);

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    p1Start();
    p2Start();
    p3Start();
    p4Start();
    p5Start();
  };

  useEffect(() => {
    animate();
  }, []);

  return <div ref={canvasRef} className="w-full h-screen bg-slate-700"></div>;
}

export default PlanetarySystem;
