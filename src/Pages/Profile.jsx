import React, { use, useEffect } from 'react';
import { AuthContext } from '../provider/Authprovider';

const Profile = () => {
    const {user}=use(AuthContext);
      useEffect(() => {
    document.title = "Profile | ToyTopia";
  }, []);
    return (
        <div>
            <h1>Profile</h1>
            {user ? (
                <div>
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt={user.displayName} />
                </div>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    );
};

export default Profile;