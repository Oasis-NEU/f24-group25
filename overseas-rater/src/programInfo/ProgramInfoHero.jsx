function ProgramInfoHero({ imageUrl, programName }) {
  return (
    <div
      style={{
        maxHeight: "500px",
        overflow: "clip",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20px",
      }}
    >
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          maxHeight: "200px",
          height: "100vh",
          position: "relative",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div
          className="hero-content"
          style={{
            position: "absolute",
            bottom: "210px",
            left: "20px",
            color: "#fff",
          }}
        >
          <div className="max-w-full">
            <h1 className="mb-5 text-7xl font-body">{programName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramInfoHero;
