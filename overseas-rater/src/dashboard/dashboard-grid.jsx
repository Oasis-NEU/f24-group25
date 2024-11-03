import DashboardElement from "./dashboard-element"

export default function DashboardGrid(ids) {
    //turn ids into list of dictionaries, call opportunities, with this format:
    // {
    //     programName: String,
    //     programLocation: String,
    //     programTerm: String,
    //     url: String
    // }
    

    const opportunities = [ 
        {
            programName: "London Scholars",
            programLocation: "London",
            programTerm: "Spring 2026",
            imageUrl: "https://shorturl.at/DQ8Sy"
        },
          
        {
            programName: "Scottish Scholars",
            programLocation: "Scotland",
            programTerm: "Spring 2030",
            imageUrl: "https://media.istockphoto.com/id/622204296/photo/kilchurn-sunset.jpg?s=2048x2048&w=is&k=20&c=zB8RvZjWQe6xGCENM-ZxAtQszBx90P-RNNoQs-WfzMs="
        },

        {
            programName: "Program in A Place",
            programLocation: "Place, Place",
            programTerm: "Time, Year",
            imageUrl: "https://img.freepik.com/premium-photo/beautiful-place-sit-with-beautiful-view-sunsetar-169_1101825-11004.jpg?semt=ais_hybrid"
        },
        {
            programName: "London Scholars",
            programLocation: "London",
            programTerm: "Spring 2026",
            imageUrl: "https://shorturl.at/DQ8Sy"
        },
          
        {
            programName: "Scottish Scholars",
            programLocation: "Scotland",
            programTerm: "Spring 2030",
            imageUrl: "https://media.istockphoto.com/id/622204296/photo/kilchurn-sunset.jpg?s=2048x2048&w=is&k=20&c=zB8RvZjWQe6xGCENM-ZxAtQszBx90P-RNNoQs-WfzMs="
        },

        {
            programName: "Program in A Place",
            programLocation: "Place, Place",
            programTerm: "Time, Year",
            imageUrl: "https://img.freepik.com/premium-photo/beautiful-place-sit-with-beautiful-view-sunsetar-169_1101825-11004.jpg?semt=ais_hybrid"
        }
    ]


    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-20">
                {opportunities.map(opportunity => (<DashboardElement programName={opportunity.programName}
                    programLocation={opportunity.programLocation} programTerm={opportunity.programTerm}
                    imageUrl={opportunity.imageUrl} />))}
            </div>
        </div>
    )
}