export default function HeroBanner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(/backgrounds/heroBackground.jpeg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hi, I'm Martin Ribotta</h1>
          <p className="mb-5 text-2xl">
            I'm a frontend developer who is aspiring to be a full stack developer.
          </p>
        </div>
      </div>
    </div>
  );
}
