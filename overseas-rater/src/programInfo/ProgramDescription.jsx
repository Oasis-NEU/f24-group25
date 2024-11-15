export default function ProgamDescription({ description }) {
  return (
    <div className="card bg-base-100 shadow-x1 font-body">
      <div className="card-body text-black">
        <h2 className="card-title text-accent">Program Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}