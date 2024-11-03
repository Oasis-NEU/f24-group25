import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">TravelNEU</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>Programs</a></li>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
          </div>
          <li><button className="btn btn-outline btn-error">Search</button></li>
          <li><button className="btn btn-error">Login</button></li>
          <li><button className="btn btn-error">Sign Up</button></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;