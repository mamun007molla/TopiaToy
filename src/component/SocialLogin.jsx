import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../provider/Authprovider';
import { useLocation, useNavigate } from 'react-router';
const SocialLogin = () => {
    const {signInWithGoogle } = use(AuthContext); 
    const location = useLocation();
    const navigate = useNavigate();
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
}
    return (
        <div className='*:my-3 *:text-secondary'>
            <button onClick={handleGoogleSignIn} className="btn btn-outline"><FcGoogle size={30}></FcGoogle> Login with Google</button>
            <button className="btn btn-outline"><FaGithub size={30}></FaGithub> Login with Github</button>
        </div>
    );      
};

export default SocialLogin;