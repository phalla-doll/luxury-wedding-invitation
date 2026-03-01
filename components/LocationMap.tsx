'use client';
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { FiMapPin } from 'react-icons/fi';

export default function LocationMap() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-soft-butter)] relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-4 font-serif">The Location</h2>
        <p className="text-center text-gray-500 mb-12 tracking-widest uppercase text-sm">
          The Grand Estate, 123 Wedding Lane, NY
        </p>
        
        <div className="w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl border border-black/5 relative">
          <Map
            initialViewState={{
              longitude: -74.006,
              latitude: 40.7128,
              zoom: 13,
              pitch: 45
            }}
            mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
            scrollZoom={false}
          >
            <NavigationControl position="top-right" />
            
            <Marker longitude={-74.006} latitude={40.7128} anchor="bottom">
              <div className="text-[var(--color-golden-bronze)] text-5xl drop-shadow-lg transform transition-transform hover:scale-110 cursor-pointer">
                <FiMapPin />
              </div>
            </Marker>
          </Map>
        </div>
      </div>
    </section>
  );
}
