// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainRoutes from './MainRoutes';

function LandingPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">🎫 Welcome to Helpdesk Portal</h1>
        <p className="text-gray-600 mb-6">Select your role to continue:</p>

        <div className="space-y-4">
          <Link to="/home">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition">
              Auth Pages
            </button>
          </Link>

          <Link to="/home2">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition">
              User
            </button>
          </Link>

          <Link to="/home3/dashboard">
            <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded transition">
              Operation Team
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page with 3 buttons */}
        <Route path="/main" element={<LandingPage />} />

        {/* All other app routes */}
        <Route path="/*" element={<MainRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
