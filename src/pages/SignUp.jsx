import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    alert(`Username: ${username}\nPassword: ${password}\nEmail: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#55D6C2]">
      <div className="bg-teal-100 p-8 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold italic text-center mb-2">Helpdesk System</h2>
        <p className="text-center mb-4">Sign up here</p>
        
        <input
          className="w-full mb-4 p-3 border bg-[#F2F5FF]"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input
          className="w-full mb-4 p-3 border bg-[#F2F5FF]"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <input
          className="w-full mb-4 p-3 border bg-[#F2F5FF]"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md mb-4"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        
        <div className="flex justify-between text-sm">
          <Link to="/forgot-password" className="text-red-600">Forgot password</Link>
          <Link to="/signin" className="font-medium">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
