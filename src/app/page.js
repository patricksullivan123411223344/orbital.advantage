"use client";
import EarthMap from "./components/EarthMap";

export default function HomePage() {
  return (
    <main className="relative w-full h-screen">
      <EarthMap />

      <div className="absolute z-10 top-0 left-0 p-6">
        <h1 className="text-3xl font-bold">Orbital Advantage</h1>
      </div>
    </main>
  );
}

