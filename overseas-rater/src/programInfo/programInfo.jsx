import ProgramInfoHero from "./hero.jsx";
import ProgramDescription from "./description.jsx"
import QuickFacts from "./QuickFacts.jsx"

function Program() {
    const programName = "London Scholars";
    const programDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const programLocation = "London";
    const programTerm = "Spring 2026";
    const programCapacity = "15";
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg";

    return (
        <div>
            <ProgramInfoHero imageUrl={imageUrl} programName={programName}/>
            <ProgramDescription description={programDescription}/>
            <QuickFacts location={programLocation}
                        term={programTerm}
                        numStudents={programCapacity}/>
        </div>
    );
}

export default Program;

/**
 * {
            programName: "Scottish Scholars",
            programDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            programLocation: "Scotland",
            programTerm: "Spring 2030",
            programCapacity: 40,
            imageUrl: "https://media.istockphoto.com/id/622204296/photo/kilchurn-sunset.jpg?s=2048x2048&w=is&k=20&c=zB8RvZjWQe6xGCENM-ZxAtQszBx90P-RNNoQs-WfzMs="
        },

        {
            programName: "Program in A Place",
            programDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            programLocation: "Place, Place",
            programTerm: "Time, Year",
            programCapacity: 60,
            imageUrl: "https://img.freepik.com/premium-photo/beautiful-place-sit-with-beautiful-view-sunsetar-169_1101825-11004.jpg?semt=ais_hybrid"
        },
        {
            programName: "London Scholars",
            programDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            programLocation: "London",
            programTerm: "Spring 2026",
            programCapacity: 200,
            imageUrl: "https://shorturl.at/DQ8Sy"
        },
          
        {
            programName: "Scottish Scholars",
            programDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            programLocation: "Scotland",
            programTerm: "Spring 2030",
            programCapacity: 1000,
            imageUrl: "https://media.istockphoto.com/id/622204296/photo/kilchurn-sunset.jpg?s=2048x2048&w=is&k=20&c=zB8RvZjWQe6xGCENM-ZxAtQszBx90P-RNNoQs-WfzMs="
        },

        {
            programName: "Program in A Place",
            programDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            programLocation: "Place, Place",
            programTerm: "Time, Year",
            programCapacity: 3,
            imageUrl: "https://img.freepik.com/premium-photo/beautiful-place-sit-with-beautiful-view-sunsetar-169_1101825-11004.jpg?semt=ais_hybrid"
        }
 */