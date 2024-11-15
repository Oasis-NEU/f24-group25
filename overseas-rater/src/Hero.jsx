export default function Hero() {
  return (
    <div style={{
      maxHeight: "500px",
      overflow: "clip",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center text-white">
          <div className="max-w-full">
            <h1 className="text-5xl font-body font-bold">Welcome to <span className="text-accent">TravelNEU</span>, a new way to explore the world.</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>

  );
}