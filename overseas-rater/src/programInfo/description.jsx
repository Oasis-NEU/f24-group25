function ProgamDescription({ description }) {
  return (
    <div className="card bg-base-100 w-50 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Program Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProgamDescription;