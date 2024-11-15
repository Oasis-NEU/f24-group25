import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-400 flex flex-col items-center justify-center p-6">
            <div className="max-w-lg text-center space-y-6 bg-gray-300 p-8 rounded-lg shadow-lg">
                <h1 className="font-header text-4xl text-accent font-semibold">Welcome to the Overseas Rater</h1>
                <p className="font-body text-lg text-gray-700">
                    Are you interested in exploring overseas opportunities offered by Northeastern? Look through our global programs here!
                </p>
                <p className="font-body text-lg text-gray-700">
                    If you've experienced a global program, rate it and help guide fellow classmates.
                </p>
                <p className="font-body text-lg text-gray-700">
                    Haven't explored a global experience yet? Discover what others have said about each program.
                </p>
                <p className="font-body text-lg text-gray-700">
                    Ready to learn more? Click below to view all programs.
                </p>
                <div className="flex justify-center">
                    <Link to="/programs">
                        <button className="bg-accent hover:bg-accent-dark text-white font-body text-lg py-2 px-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105">
                            View Programs
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
