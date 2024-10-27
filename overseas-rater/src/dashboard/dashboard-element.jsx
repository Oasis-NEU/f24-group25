export default function DashboardElement({imageUrl, programName, programLocation, programTerm}){

    return (
      <div className="card bg-base-100 w-96 shadow-xl border-4 border-white">
        <div className="flex justify-center items-center">
          <figure className="w-48 aspect-square">
             <img
                src={imageUrl}
                alt={programLocation}
                className="w-full h-full rounded-xl object-cover"/>
           </figure>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title cent">{programName}</h2>
          <p>{programLocation}, {programTerm}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Explore</button>
          </div>
        </div>
      </div>

    )
}