"use client";

import { useEffect } from "react";
import useCamera from "@/hooks/three/useCamera";
import usePlanet from "@/hooks/three/usePlanet";
import useSphere from "@/hooks/three/useSphere";

function PlanetarySystem() {
  const { canvasRef, scene, camera, renderer } = useCamera({
    lookPosition: { x: 0, y: 0, z: 0 },
    position: { x: 0, y: 5, z: 15 },
  });

  // Sun
  const { sphere } = useSphere({ color: "#fb2", radius: 2 });
  scene.add(sphere);

  // planet1
  const { planet: planet1,revolve } = usePlanet({ orbitRadius: 4, planetRadius: 1 });
  scene.add(planet1);

  // planet2
  const { planet: planet2 } = usePlanet({ orbitRadius: 6, planetRadius: 1 });
  scene.add(planet2);

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    planet1.rotateY(.01)
    revolve()
  };

  useEffect(() => {
    animate();
  }, []);

  return <div ref={canvasRef} className="w-full h-screen bg-slate-700"></div>;
}

export default PlanetarySystem;
