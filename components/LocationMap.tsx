'use client';

export default function LocationMap() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-soft-butter)] relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-4 font-serif">The Location</h2>
        <p className="text-center text-gray-500 mb-12 tracking-widest uppercase text-sm">
          Park Avenue, Koh Pich City Hall, Phnom Penh, Cambodia
        </p>
        
        <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl border border-black/5 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950.5317490644426!2d104.94066168546576!3d11.550501134758159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310957422319ef25%3A0x386728e61a9d4d5d!2sKoh%20Pich%20City%20Hall!5e0!3m2!1sen!2skh!4v1772349739015!5m2!1sen!2skh"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding venue location map"
          ></iframe>
        </div>

        {/* 
        <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl border border-black/5 relative">
          <Map
            initialViewState={{
              longitude: 104.94120693802762,
              latitude: 11.550582927736597,
              zoom: 16,
              pitch: 45
            }}
            mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
            scrollZoom={false}
          >
            <NavigationControl position="top-right" />
            
            <Marker longitude={104.94120693802762} latitude={11.550582927736597} anchor="bottom">
              <div className="text-[var(--color-golden-bronze)] text-5xl drop-shadow-lg transform transition-transform hover:scale-110 cursor-pointer">
                <FiMapPin />
              </div>
            </Marker>
          </Map>
        </div>
        */}
      </div>
    </section>
  );
}
