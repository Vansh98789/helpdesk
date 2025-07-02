import { Routes, Route, Navigate } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';

import Home2 from './pages/Home2';
import Dashboard from './pages/Dashboard';
import NewTicket from './pages/NewTicket';
import MyTickets from './pages/MyTickets';
import TicketDetails from './pages/TicketDetails';

import Home3 from './pages/home3'; // Layout with sidebar
import Dashboard2 from './pages/Dashboard2';
import TicketApproval from './pages/TicketApproval';
import MyTicket from './pages/MyTicket';
import Performance from './pages/p';

const MainRoutes = () => {
  return (
    <Routes>
      {/* Redirect default "/" to /main */}
      <Route path="/" element={<Navigate to="/main" />} />

      {/* Auth Pages */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} />

      {/* Old Helpdesk Pages */}
      <Route path="/home2" element={<Home2 />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new-ticket" element={<NewTicket />} />
      <Route path="/my-tickets" element={<MyTickets />} />
      <Route path="/ticket/:id" element={<TicketDetails />} />

      {/* New Helpdesk layout with nested pages */}
      <Route path="/home3" element={<Home3 />}>
        <Route path="dashboard" element={<Dashboard2 />} />
        <Route path="ticket-approval" element={<TicketApproval />} />
        <Route path="my-ticket" element={<MyTicket />} />
        <Route path="performance" element={<Performance />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
