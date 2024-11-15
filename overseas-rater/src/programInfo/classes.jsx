export default function Classes({classList}) {
  return (
    <div className="card bg-base-100 font-body shadow-x1">
      <div className="card-body text-black">
        <h2 className="card-title text-accent">Classes</h2>
        <p>{classList}</p>
      </div>
    </div>
  );
}