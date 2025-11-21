import { useState } from "react";
import { auth } from "../firebase";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [firebaseError, setFirebaseError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setFirebaseError("");
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate("/login")
      alert("Signup successful!");
    } catch (error) {
      setFirebaseError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Create Account</h1>

        {firebaseError && (
          <div className="bg-red-500 text-white p-2 rounded mb-4 text-center">{firebaseError}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-white block mb-1">First Name</label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className="w-full p-3 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-red-500"
              placeholder="Enter your first name"
            />
            {errors.firstName && <p className="text-red-500 mt-1">{errors.firstName.message}</p>}
          </div>

          <div>
            <label className="text-white block mb-1">Last Name</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-red-500"
              placeholder="Enter your last name"
            />
            {errors.lastName && <p className="text-red-500 mt-1">{errors.lastName.message}</p>}
          </div>

          <div>
            <label className="text-white block mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-red-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-white block mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-3 rounded bg-gray-800 text-white outline-none border border-gray-600 focus:border-red-500"
              placeholder="Create password"
            />
            {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <button
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition font-semibold"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-white text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-red-400 hover:text-red-300">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;