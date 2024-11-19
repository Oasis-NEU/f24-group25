import DashboardElement from "./dashboard-element";
import programList from "../program_list.json";
import Fuse from "fuse.js";

export default function DashboardGrid(syntheticEvent, event, searchTerm ="") {
  //the syntheticEvent and event handlers are given by jsx and ignoreed
  // Assuming programList is imported from your JSON file
  
  const fuse = new Fuse(programList, {
    keys: ["title", "location"],
    includeScore: true,
    findAllMatches: true,
    minMatchCharLength: 0,
  });

  const opportunities =  (searchTerm === "") ?  programList : fuse.search(searchTerm).map((program) => program.item) 
  console.log(searchTerm)


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
