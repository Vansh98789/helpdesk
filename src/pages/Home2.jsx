import { useState } from 'react';
import { FaTachometerAlt, FaPlusCircle, FaTicketAlt } from 'react-icons/fa';
import Dashboard from './Dashboard';
import NewTicket from './NewTicket';
import MyTickets from './MyTickets';

export default function Home2() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'new-ticket':
        return <NewTicket />;
      case 'my-ticket':
        return <MyTickets />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-gray-200 p-4 min-h-screen">
        <h1 className="text-3xl font-bold italic text-white bg-teal-400 p-2 rounded">Helpdesk</h1>
        <nav className="mt-6 space-y-4">
          <div
            className={`flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-gray-300 ${
              activePage === 'dashboard' && 'bg-gray-300'
            }`}
            onClick={() => setActivePage('dashboard')}
          >
            <FaTachometerAlt /> Dashboard
          </div>
          <div
            className={`flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-gray-300 ${
              activePage === 'new-ticket' && 'bg-gray-300'
            }`}
            onClick={() => setActivePage('new-ticket')}
          >
            <FaPlusCircle /> New Ticket
          </div>
          <div
            className={`flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-gray-300 ${
              activePage === 'my-ticket' && 'bg-gray-300'
            }`}
            onClick={() => setActivePage('my-ticket')}
          >
            <FaTicketAlt /> My Ticket
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="bg-teal-300 text-right p-2 text-sm text-gray-800 font-semibold">
          User - {activePage === 'dashboard' ? 'Dashboard' : activePage === 'new-ticket' ? 'New Ticket' : 'My Ticket'}
        </div>
        <div className="p-6 bg-white min-h-screen">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}
