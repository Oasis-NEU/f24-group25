function QuickFacts({ location, term, numStudents }) {
  return (
    <div className="card bg-base-100 w-50 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Quick Facts</h2>
        <p>Program Location: {location}</p>
        <p>Number of Students: {numStudents}</p>
        <p>Term: {term}</p>
      </div>
    </div>
  );
}

export default QuickFacts;