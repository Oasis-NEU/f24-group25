import { useState } from 'react';
import { supabase } from '../../supabaseClient';

const ReviewForm = ({ programId }) => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        semester: '',
        academics_rating: 3,
        housing_rating: 3,
        value_rating: 3,
        fun_rating: 3,
        safety_rating: 3,
        estimated_cost: '',
        would_recommend: true,
    });
    const [photos, setPhotos] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'number' ? Number(value) : value
        }));
    };

    const handlePhotoUpload = async (e) => {
        const files = Array.from(e.target.files);

        for (const file of files) {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            try {
                const { error: uploadError } = await supabase.storage
                    .from('review-photos')
                    .upload(filePath, file);

                if (uploadError) throw uploadError;

                const { data: { publicUrl } } = supabase.storage
                    .from('review-photos')
                    .getPublicUrl(filePath);

                setPhotos(prev => [...prev, { url: publicUrl, caption: '' }]);
            } catch (error) {
                console.error('Error uploading photo:', error.message);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // Get current user
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) throw new Error('Please sign in to submit a review');

            // Insert review
            const { data: review, error: reviewError } = await supabase
                .from('reviews')
                .insert([
                    {
                        ...formData,
                        program_id: programId,
                        user_id: user.id,
                    }
                ])
                .select()
                .single();

            if (reviewError) throw reviewError;

            // Insert photos
            if (photos.length > 0) {
                const { error: photosError } = await supabase
                    .from('photos')
                    .insert(
                        photos.map(photo => ({
                            review_id: review.id,
                            url: photo.url,
                            caption: photo.caption
                        }))
                    );

                if (photosError) throw photosError;
            }

        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Write a Review</h2>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Semester</label>
                    <select
                        name="semester"
                        value={formData.semester}
                        onChange={handleInputChange}
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="">Select semester</option>
                        <option value="Fall 2023">Fall 2023</option>
                        <option value="Spring 2024">Spring 2024</option>
                        <option value="Summer 2024">Summer 2024</option>
                    </select>
                </div>

                {['academics', 'housing', 'value', 'fun', 'safety'].map((category) => (
                    <div key={category}>
                        <label className="block text-sm font-medium text-gray-700 capitalize">
                            {category} Rating
                        </label>
                        <input
                            type="range"
                            name={`${category}_rating`}
                            min="1"
                            max="5"
                            value={formData[`${category}_rating`]}
                            onChange={handleInputChange}
                            className="range"
                            step="1"
                        />
                        <div className="flex justify-between text-xs">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <span key={num}>{num}</span>
                            ))}
                        </div>
                    </div>
                ))}

                <div>
                    <label className="block text-sm font-medium text-gray-700">Estimated Cost ($)</label>
                    <input
                        type="number"
                        name="estimated_cost"
                        value={formData.estimated_cost}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        placeholder="0.00"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Review Content</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        className="textarea textarea-bordered w-full h-32"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Photos</label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handlePhotoUpload}
                        className="file-input file-input-bordered w-full"
                    />
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="would_recommend"
                        checked={formData.would_recommend}
                        onChange={(e) => setFormData(prev => ({
                            ...prev,
                            would_recommend: e.target.checked
                        }))}
                        className="checkbox"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-700">
                        I would recommend this program
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;