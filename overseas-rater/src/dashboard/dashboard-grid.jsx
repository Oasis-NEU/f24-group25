import DashboardElement from "./dashboard-element"

export default function DashboardGrid(ids) {
    //turn ids into list of dictionaries, call opportunities, with this format:
    // {
    //     programName: String,
    //     programLocation: String,
    //     programTerm: String,
    //     url: String
    // }
    let opportunities = []

    return (
        <div class="grid-cols-5">
            {opportunities.map(opportunity => (<DashboardElement programName={opportunity.programName}
                programLocation={opportunity.programLocation} programTerm={opportunity.programTerm}
                imageUrl={opportunity.imageUrl} />))}
        </div>
    )
}