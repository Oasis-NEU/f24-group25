

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
         <div class="rounded-lg border bg-gray-400 border-solid border-black w-96">
            <h2 class="text-2xl text-red-700 justify-center flex">{programName}</h2>
            <div class="flex justify-evenly">
                <div>
                    <p>{programLocation}</p>
                    <p>{programTerm}</p>
                </div>
                <img src={imageUrl} />
             </div>
        </div>

    )
}
