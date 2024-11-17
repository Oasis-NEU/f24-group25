import DashboardElement from "./dashboard-element"
import programList from '../program_list.json'

export default function DashboardGrid(searchTerm = "") {
    // Assuming programList is imported from your JSON file
    const opportunities = programList.filter((opportunity) => (opportunity.title.includes(searchTerm)))

    

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-20">
                {opportunities.map(program => (
                    <DashboardElement 
                        key={program.id}
                        title={program.title}
                        location={program.location}
                        semesters={program.semesters}
                        image_base64={program.image_base64}
                    />
                ))}
            </div>
        </div>
    )
}