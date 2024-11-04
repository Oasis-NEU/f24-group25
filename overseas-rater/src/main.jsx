import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignInPage from './sign-in/sign-in.jsx'
import SignUpPage from './sign-up/sign-up.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
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
    element: <App />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
