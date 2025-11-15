import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/Authprovider";

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up | ToyTopia";
  }, []);
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, setUser, signInWithGoogle } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    // eslint-disable-next-line no-unused-vars
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    if (name.length < 3) {
      setNameError("Name must be at least 3 characters long");
      return;
    } else {
      setNameError("");
    }
    const pattern =
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~])(?!.*\s).{6,}$/;
    if (!pattern.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    } else {
      setPasswordError("");
    }
    
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">Create a new account to get started.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignup} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Full Name"
              />
              {nameError && <p className="text-red-500">{nameError}</p>}
              <label className="label">PhotoURL</label>
              <input
                name="photoURL"
                type="text"
                className="input"
                placeholder="Photo URL"
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
              <button type="submit" className="btn btn-neutral mt-4">
                Sign Up
              </button>
            </fieldset>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="link link-hover text-blue-500">
                Login
              </Link>
            </p>
            <p className="text-center">
              SignUp with{" "}
              <Link
                onClick={handleGoogleSignIn}
                className="link link-hover text-blue-500"
              >
                Google
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
