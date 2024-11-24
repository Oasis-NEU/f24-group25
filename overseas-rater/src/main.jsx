import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Program from './programInfo/Program.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import LandingPage from './LandingPage/LandingPage.jsx'
import SignInPage from './sign-in/SignInPage.jsx'
import SignUpPage from './sign-up/SignUpPage.jsx'
import ReviewForm from "./reviewForm/ReviewForm.jsx";
import UserPage from "./userPage/UserPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/sign-in",
    element: <SignInPage />
  },
  {
    path: "/sign-up",
    element: <SignUpPage />
  },
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/programs',
    element: <App />
  },
  {
    path: '/program-info',
    element: <Program />
  },

  // {
  //   path: '/review-form',
  //   element: <ReviewForm />
  // }

  {
    path: '/user',
    element: <UserPage />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
