export default function Hero() {
  return (
    <div style={{
      maxHeight: "500px",
      overflow: "clip",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div className="hero min-h-screen">
        <div className="hero-content text-center text-neutral">
          <div>
          </div>
          <div className="max-w-full">
            <h1 className="text-5xl font-body font-bold">Welcome to <span className="text-accent">TravelNEU</span>, your one-stop shop to all things Study Abroad.</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary bg-accent text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>

  );
}