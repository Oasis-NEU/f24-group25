import { useState } from 'react'
import { supabase } from '../../supabaseClient'

export default function SignUpBox() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    department: '',
    major: '',
    graduationYear: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            department: formData.department,
            major: formData.major,
            graduation_year: formData.graduationYear
          }
        }
      })

      if (authError) throw authError

      setSuccess(true)
      window.location.href = './programs'
      
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-auto shadow-xl border-4 border-black p-5">
        <div className="w-96">
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error}</span>
            </div>
          )}
          
          {success && (
            <div className="alert alert-success mb-4">
              <span>Successfully signed up! Please check your email to verify your account.</span>
            </div>
          )}

          <form onSubmit={handleSignUp} className="space-y-4">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                name="email"
                className="grow"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                name="fullName"
                className="grow"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" />
              </svg>
              <input
                type="password"
                name="password"
                className="grow"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                minLength={6}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="department"
                className="grow"
                placeholder="Home School"
                value={formData.department}
                onChange={handleInputChange}
                required
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="major"
                className="grow"
                placeholder="Major"
                value={formData.major}
                onChange={handleInputChange}
                required
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="number"
                name="graduationYear"
                className="grow"
                placeholder="Graduation Year"
                value={formData.graduationYear}
                onChange={handleInputChange}
                required
                min={2024}
                max={2030}
              />
            </label>

            <button 
              type="submit" 
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}