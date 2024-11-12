import DashboardElement from "./dashboard-element"

export default function DashboardGrid(ids) {
    //turn ids into list of dictionaries, call opportunities, with this format:
    // {
    //     programName: String,
    //     programLocation: String,
    //     programTerm: String,
    //     url: String
    // }

    
    fileText = ""

    const opportunities = JSON.parse(fileText)


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