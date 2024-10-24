export default function DashboardElement({imageUrl, programName, programLocation, programTerm}){
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={imageUrl}
            alt={programLocation}
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{programName}</h2>
          <p>{programLocation}, {programTerm}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

    )
}