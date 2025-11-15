import React, { use } from "react";
import { NavLink,Link } from "react-router";
import { AuthContext } from "../provider/Authprovider";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    
  const { user, signOutUser } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );
  const handleSignout = () => {
    signOutUser();
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Toy Topia</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-4">
        {!user?<CgProfile size={30}/>:user.photoURL ? (
          <img
            title={user.displayName}
            src={user.photoURL}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <CgProfile size={30}/>
        )}
        {user ? (
          <Link onClick={handleSignout} className="btn btn-secondary">
            LogOut
          </Link>
        ) : (
            
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
