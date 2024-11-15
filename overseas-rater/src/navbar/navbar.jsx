import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-background font-body items-center justify-between px-4">
      <div className="flex-1 flex items-center">
        <a
          className="btn btn-ghost text-accent font-bold text-xl"
          onClick={() => navigate("/programs")}
        >
          TravelNEU
        </a>
      </div>
      <div className="flex-none flex items-center">
        <ul className="menu menu-horizontal px-1 gap-4 flex items-center">
          <li>
            <a onClick={() => navigate("/programs")}>Programs</a>
          </li>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
          <li>
            <button onClick={() => navigate("/sign-in")} className="btn btn-outline btn-accent">
              Sign In
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/sign-up")} className="btn btn-accent">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
