function QuickFacts({ location, term, numStudents }) {
  return (
    <div className="card bg-base-100 font-body shadow-x1">
      <div className="card-body text-black font-body ">
        <h2 className="card-title font-body text-accent">Quick Facts</h2>
        <p>Location: {location}</p>
        <p>Number of Students: {numStudents}</p>
        <p>Term: {term}</p>
      </div>
    </div>
  );
}

export default QuickFacts;
