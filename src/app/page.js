"use client";

import EarthMap from "./components/EarthMap";

export default function HomePage() {
  return (
    <main className="relative w-full h-screen">
      <EarthMap />
      
      <div className="absolute top-0 left-0 z-10 w-full h-full flex items-start justify-start p-6 pointer-events-none">
        <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl text-white pointer-events-auto">
          <h1 className="text-2xl font-bold mb-2">Orbital Advantage</h1>
          <p className="text-sm max-w-sm">
            Live global intelligence interface. Track, navigate, and understand
            real-time events across the world.
          </p>
        </div>
      </div>
    </main>
  );
}
