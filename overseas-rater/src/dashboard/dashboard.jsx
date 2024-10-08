

// function testing(){
//     const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cute_dog.jpg/1200px-Cute_dog.jpg"
//     return dashboardElement(url, "Name", "Place", "Spring")
// }

function dashboardOption(id){
    // open file for info using ID-number
    // get image-url, program-name, program-location, program-term

    const imageUrl = null
    const programName = null
    const programLocation = null
    const programTerm = null
}



function dashboardElement(imageUrl, programName, programLocation, programTerm){
    return (
        <div class="rounded-lg"> 
            <h2>{programName}</h2>
            <p>{programLocation}</p>
            <p>{programTerm}</p>
            <img src={imageUrl}  />
        </div>
    )
}
