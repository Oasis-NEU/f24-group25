function ProgamDescription({ description }) {
  return (
    <div className="card bg-cardBg font-body shadow-x2">
      <div className="card-body text-black">
        <h2 className="card-title text-accent">Program Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProgamDescription;