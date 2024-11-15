function ProgramInfoHero({ imageUrl, programName }) {
  return (
      <div
        style={{
          maxHeight: '500px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20px'
        }}
      >
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maxHeight: '200px',
            height: '100vh',
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{programName}</h1>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProgramInfoHero;