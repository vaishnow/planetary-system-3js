import dynamic from "next/dynamic";

const PlanetarySystem = dynamic(() => import("./PlanetarySystem"), {
  ssr: false,
});

export default function Home() {
  return <PlanetarySystem />;
}
