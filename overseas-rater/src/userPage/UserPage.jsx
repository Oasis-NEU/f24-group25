import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import UserHero from "./UserHero";
import DashboardElement from "../dashboard/dashboard-element";
import programList from "../program_list.json";
import Navbar from "../navbar/navbar";
import { useNavigate } from 'react-router-dom';

export default function UserPage() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // or use Next.js router

    useEffect(() => {
        // Check if user is authenticated
        const checkUser = async () => {
            try {
                const { data: { user: authUser } } = await supabase.auth.getUser();
                
                if (!authUser) {
                    // Redirect to login if not authenticated
                    navigate('/sign-in');
                    return;
                }

                // Fetch user profile data
                const { data: profile, error: profileError } = await supabase
                    .from('users')
                    .select('*')
                    .eq('id', authUser.id)
                    .single();

                if (profileError) throw profileError;

                setUser(profile);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        checkUser();
    }, [navigate]);

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

    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <div className="loading loading-spinner loading-lg"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-screen flex items-center justify-center text-red-500">
                Error loading user profile: {error}
            </div>
        );
    }

    return (
        <div className="w-full">
            <Navbar />
            <UserHero 
                name={user?.full_name}
                department={user?.department}
                major={user?.major}
                graduationYear={user?.graduation_year}
            />
            <div className="text-left text-xl font-bold text-body ml-6 mb-4">
                Saved Programs
            </div>
            <div className="ml-4">
                <UserCarousel programList={programList} />
            </div>
        </div>
    );
}