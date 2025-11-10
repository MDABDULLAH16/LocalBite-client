import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';

const GoogleButton = () => {
  const { signInWithGoogle ,setLoading} = use(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
      signInWithGoogle().then(result => {
        const user = result.user;
        if (user) {
          toast.success('Login Successful!!')   
          navigate(from, { replace: true })
          setLoading(false)
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