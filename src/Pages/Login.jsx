import React, { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/Authprovider";

const Login = () => {
  useEffect(() => {
    document.title = "Login | ToyTopia";
  }, []);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { signInUser, signInWithGoogle, resetPassword } = use(AuthContext);
  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User signed in:", user);
        navigate(location.state ? location.state : "/");
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in:", errorCode, errorMessage);
        setError(errorMessage);
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
  const handleforgetpassword = () => {
    const email = prompt("Please enter your email address:");
    if (email) {
      resetPassword(email)
        .then(() => {
          alert("Password reset email sent!");
        })
        .catch((error) => {
          console.error("Error resetting password:", error);
        });
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Welcome back! Please enter your details.</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignin} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a onClick={handleforgetpassword} className="link link-hover">
                  Forgot password?
                </a>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>
            <p>
              Create an account?{" "}
              <Link to="/signup" className="link link-hover text-blue-500">
                Sign up
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

export default Login;
