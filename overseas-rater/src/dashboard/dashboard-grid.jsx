import DashboardElement from "./dashboard-element";
import programList from "../program_list.json";
import Fuse from "fuse.js";

export default function DashboardGrid(syntheticEvent, event, searchTerm = "l") {
  //the syntheticEvent and event handlers are given by jsx and ignoreed
  // Assuming programList is imported from your JSON file
  //console.log(syntheticEvent)
  const fuse = new Fuse(programList, {
    keys: ["title", "location"],
    includeScore: true,
    findAllMatches: true,
    minMatchCharLength: 0,
  });
  const search = syntheticEvent.searchTerm
  const opportunities = (search === "") ? programList : fuse.search(search).map((program) => program.item)
  //console.log((searchTerm === '') ? null : search)


  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-20">
        {opportunities.map((program) => (
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
  );
}
