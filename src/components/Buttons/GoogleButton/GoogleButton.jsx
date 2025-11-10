import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleButton = () => {
    const handleGoogleSignIn = () => {
      console.log("Google Sign In clicked");
    };
    return (
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline w-full flex items-center justify-center gap-2"
      >
        <FcGoogle size={22} /> Continue with Google
      </button>
    );
};

export default GoogleButton;