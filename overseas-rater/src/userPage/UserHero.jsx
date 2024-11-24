export default function UserHero({ name }) {
    return (
      <div
        style={{
          maxHeight: "300px",
          overflow: "clip",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="hero min-h-screen">
          <div className="hero-content text-left text-neutral">
            <div></div>
            <div className="max-w-full">
              <h1 className="text-5xl font-body font-bold">
                Welcome back, <span className="text-accent">{name}</span>.
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  };