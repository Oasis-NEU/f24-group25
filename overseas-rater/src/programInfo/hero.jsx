function ProgramInfoHero({ imageUrl, programName }) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{programName}</h1>
        </div>
      </div>
    </div>
  );
}

export default ProgramInfoHero;