import DashboardElement from "./dashboard-element"

export default function DashboardGrid(ids) {
    //turn ids into list of dictionaries, call opportunities, with this format:
    // {
    //     programName: String,
    //     programLocation: String,
    //     programTerm: String,
    //     url: String
    // }
    

    let opportunities = [ 
        {
            programName: "London Scholars",
            programLocation: "London",
            programTerm: "Spring 2026",
            url: "https://shorturl.at/DQ8Sy"
        },
          
        {
            programName: "Scottish Scholars",
            programLocation: "Scotland",
            programTerm: "Spring 2030",
            url: "https://media.istockphoto.com/id/622204296/photo/kilchurn-sunset.jpg?s=2048x2048&w=is&k=20&c=zB8RvZjWQe6xGCENM-ZxAtQszBx90P-RNNoQs-WfzMs="
        }
    ]


    return (
        <div class="grid grid-cols-3">
            {opportunities.map(opportunity => (<DashboardElement programName={opportunity.programName}
                programLocation={opportunity.programLocation} programTerm={opportunity.programTerm}
                imageUrl={opportunity.imageUrl} />))}
        </div>
    )
}