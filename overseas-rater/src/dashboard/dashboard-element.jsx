export default function DashboardElement({image_base64, title, location, semesters}){
  return (
      <div className="card bg-base-100 w-96 shadow-xl border-4 border-white gap-5">
        <div className="flex justify-center items-center">
          <figure className="w-48 aspect-square">
            <img
                src={`data:image/jpeg;base64,${image_base64}`}
                alt={location}
                className="w-full h-full rounded-xl object-cover"/>
          </figure>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title cent">{title}</h2>
          <p>{location}</p>
          <p>Available: {semesters}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Explore</button>
          </div>
        </div>
      </div>
  )
}