import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    alert(`Email: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#55D6C2]">
      <div className="bg-teal-100 p-8 rounded-md w-full max-w-md text-center ">
        <p className="mb-6">
          Don’t worry, enter your email below and we will send you a link to change your password.
        </p>

        <input
          className="w-full mb-4 p-3 border bg-[#F2F5FF]"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="w-full bg-green-500 text-white py-2 rounded-md mb-4"
          onClick={handleSubmit}
        >
          Submit
        </button>

        <Link to="/signin" className="block bg-blue-600 text-white py-2 rounded-md">
          Sign In
        </Link>
      </div>
    </div>
  );
}
