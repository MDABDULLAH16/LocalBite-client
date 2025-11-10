import   { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import GoogleButton from "../../components/Buttons/GoogleButton/GoogleButton";
import register from "/register.gif";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, { displayName: fullName })
          .then(() => {
            const newUser = {
              name: user.displayName,
              email: user.email,
              image: user.photoURL || "",
            };

            fetch(`${BACKEND_URL}/users`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then(async (res) => {
                const data = await res.json();

                if (res.status === 409) {
                  toast.error("User already exists. Please login instead.");
                  return;
                }

                if (res.ok && data.insertedId) {
                  toast.success("Registration successful!");
                  navigate(from, { replace: true });
                } else {
                  toast.success(data.message || "Something went wrong.");
                   navigate(from, { replace: true });
                }
              })
              .catch((err) => toast.error(err.message));
          })
          .catch((err) => toast.error("Profile update failed: " + err.message));
      })
      .catch((err) => toast.error("Registration failed: " + err.message));
  };
 

  return (
    <div className="min-h-screen flex flex-row items-center justify-center bg-base-200 p-8 ">
      <div className=" flex  lg:flex-row items-center justify-center    shadow-2xl bg-base-100 overflow-hidden rounded-lg">
        {/* Left Side - GIF */}
        <div className=" hidden lg:block  p-4">
          <img
            src={register}
            alt="Register GIF"
            className=" w-full  object-cover rounded-l-lg lg:rounded-l-lg rounded-t-lg lg:rounded-t-none"
          />
        </div>

        {/* Right Side - Form */}
        <div className="  p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full pr-10"
                required
              />
              <div
                className="absolute right-3 top-[38px] cursor-pointer text-xl text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>

            <button className="btn btn-primary w-full mt-2 hover:scale-105 transition-transform">
              Register
            </button>
          </form>

          <div className="divider">OR</div>

          <GoogleButton />

          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
