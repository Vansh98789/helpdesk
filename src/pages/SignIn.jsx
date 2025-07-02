import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#55D6C2]">
      <div className="bg-teal-100 p-8 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold italic text-center mb-6">Helpdesk System</h2>
        
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
        
        <button
          className="w-full bg-green-500 text-white py-2 rounded-md mb-4"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        
        <div className="flex justify-between text-sm">
          <Link to="/forgot-password" className="text-red-600">Forgot password</Link>
          <Link to="/signup" className="font-medium">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
