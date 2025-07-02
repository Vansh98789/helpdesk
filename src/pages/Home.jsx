import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-teal-300 gap-4">
      <h1 className="text-3xl font-bold mb-6">Helpdesk System Navigation</h1>
      <Link to="/signin" className="bg-green-500 text-white px-6 py-2 rounded-md">Go to Sign In</Link>
      <Link to="/signup" className="bg-blue-500 text-white px-6 py-2 rounded-md">Go to Sign Up</Link>
      <Link to="/forgot-password" className="bg-yellow-500 text-white px-6 py-2 rounded-md">Go to Forgot Password</Link>
    </div>
  );
}
