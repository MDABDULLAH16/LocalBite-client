import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import { toast } from 'react-toastify';

const GoogleButton = () => {
  const { signInWithGoogle } = use(AuthContext);

    const handleGoogleSignIn = () => {
      signInWithGoogle().then(result => {
        const user = result.user;
        if (user) {
          toast.success('Login Successful!!')          
        }
      }).catch(err=>toast.error(err.message))
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