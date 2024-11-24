import UserHero from "./UserHero";
import DashboardElement from "../dashboard/dashboard-element";
import programList from "../program_list.json";
import Navbar from "../navbar/navbar";

export default function UserPage() {
    const name = "Laith Taher";

    const UserCarousel = ({ programList }) => {
        return (
            <div>
                <div className="carousel carousel-center bg-white rounded-box w-full max-h-100 space-x-4 p-4">
                    {programList.map((program) => (
                        <div key={program.id} className="carousel-item h-full">
                            <DashboardElement
                                title={program.title}
                                location={program.location}
                                semesters={program.semesters}
                                image_base64={program.image_base64}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full">
            <Navbar />
            <UserHero name={name} />
            <div className="text-left text-xl font-bold text-body ml-6 mb-4">
                Saved Programs
            </div>
            <div className="ml-4">
                <UserCarousel programList={programList} />
            </div>
        </div>
    );
}
