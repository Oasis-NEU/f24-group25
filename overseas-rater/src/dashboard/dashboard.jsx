

// function testing(){
//     const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cute_dog.jpg/1200px-Cute_dog.jpg"
//     return dashboardElement(url, "Name", "Place", "Spring")
// }

function DashboardOption(){
    // open file for info using ID-number
    // get image-url, program-name, program-location, program-term
    // need to make this take an id-number parameter

    const imageUrl = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    const programName = "London Scholars"
    const programLocation = "London"
    const programTerm = "Spring"
    return (
        <div>
            <DashboardElement imageUrl={imageUrl} programName={programName} programLocation={programLocation} programTerm={programTerm} />
        </div>

    )
}



function DashboardElement({imageUrl, programName, programLocation, programTerm}){
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={imageUrl}
            alt="Shoes"
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


export default DashboardOption
