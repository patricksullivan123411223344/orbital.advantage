"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function EaerthMap() {
    const mapContainer = useRef(null);

    useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [0, 0],
      zoom: 1.3,
      projection: "globe",
    });

    map.on("style.load", () => {
        map.setFog({}); 
    });

        
    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-screen rounded-2xl border border-gray-700"
    />
  );
}
