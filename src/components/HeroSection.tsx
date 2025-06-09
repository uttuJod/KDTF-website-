export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/29d113ee-c430-4935-a6d2-3f1723ab98eb.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Home of Drones
            <br />
            For Good®
            <br />
            and AAM for
            <br />
            Good®.
          </h1>
        </div>
      </div>

      {/* American Flag positioned in the hero */}
      <div className="absolute bottom-10 right-10 opacity-80">
        <div className="w-24 h-16 bg-gradient-to-r from-red-600 via-white to-blue-600 rounded shadow-lg"></div>
      </div>
    </section>
  );
};
