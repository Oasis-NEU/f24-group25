export default function Hero() {
  return (
    <div
      style={{
        maxHeight: "500px",
        overflow: "clip",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="hero min-h-screen">
        <div className="hero-content text-center text-neutral">
          <div></div>
          <div className="max-w-full">
            <h1 className="text-5xl font-body font-bold">
              Welcome to <span className="text-accent">TravelNEU</span>, your
              one-stop shop to all things Study Abroad.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
