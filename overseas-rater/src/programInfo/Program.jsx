import ProgramInfoHero from "./ProgramInfoHero.jsx";
import ProgramDescription from "./ProgramDescription.jsx";
import QuickFacts from "./QuickFacts.jsx";
import Stats from "./stats.jsx";
import Classes from "./Classes.jsx";
import Navbar from "../navbar/navbar.jsx";
import { useEffect, useState } from "react";
import axios from 'axios';

/**
 * Fetches an image from the Unsplash API using axios.
 * 
 * @param {*} location the location to search
 * @returns the image URL
 */
async function fetchImageFromLocation(location) {
    const apiKey = "W7SXa5FR_6EoPJjcs_Jd9PiltIuAKK75m-pww7GkBhM";
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(location)}&client_id=${apiKey}`;

    try {
        const response = await axios.get(url);
        const imageUrl = response.data.results[0]?.urls?.regular;

        if (imageUrl) {
            console.log(`Image for ${location}: ${imageUrl}`);
            return imageUrl;
        } else {
            console.error("No images found!");
            return null;
        }
    } catch (error) {
        console.error("Error encountered: ", error);
        return null;
    }
}

/**
 * Builds a program page off of the specified information.
 * 
 * @param {*} name the name of the program
 * @param {*} description the description
 * @param {*} location the location
 * @param {*} term the semester(s) this program is offered
 * @param {*} capacity the number of students who can go
 * @param {*} class_list the classes offered
 * @returns the program page
 */
function Program(name, description, location, term, capacity, class_list) {
    const programName = "London School of Economics: Summer School";
    const programDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const programLocation = "London";
    const programTerm = "Spring 2026";
    const programCapacity = "15";
    const classList = "CS3500: Object-Oriented Design \n CS2500: Fundamentals of Computer Science II";

    const [imageURL, setImageURL] = useState(null);



    useEffect(() => {

        const fetchData = async () => {
            const url = await fetchImageFromLocation(programLocation);
            setImageURL(url);
        }
        fetchData();
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, []);



    return (
        <>
            <Navbar />
            <div className="p-10">
                {
                    (!imageURL)
                        ? <div>Loading...</div> :
                        <ProgramInfoHero imageUrl={imageURL} programName={programName} />
                }
                <div className="flex justify-between gap-6 my-6 items-stretch">
                    <div style={{ borderRadius: "20px" }} className="flex-1 bg-base-100 shadow-lg">
                        <ProgramDescription description={programDescription} />
                    </div>
                    <div style={{ borderRadius: "20px" }} className="w-1/5 bg-base-100 shadow-lg" >
                        <Stats />
                    </div>
                </div>

                <div className="my-6"></div>

                <div className="flex justify-between gap-6 my-6 items-stretch">
                    <div style={{ borderRadius: "20px" }} className="w-1/5 bg-base-100 shadow-lg">
                        <QuickFacts location={programLocation}
                            term={programTerm}
                            numStudents={programCapacity} />
                    </div>
                    <div style={{ borderRadius: "20px" }} className="flex-1 bg-base-100 shadow-lg">
                        <Classes classList={classList} />
                    </div>
                    <div style={{ borderRadius: "20px" }} className="w-1/5 bg-base-100 shadow-lg">
                        <div className="card bg-base-100 font-body shadow-x2">
                            <div className="card-body text-black font-body ">
                                <h2 className="card-title font-body text-accent">Last updated:</h2>
                                <p>Today</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
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