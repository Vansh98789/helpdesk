import React, { useState } from "react";
import { FaTachometerAlt, FaTicketAlt, FaUserCheck, FaChartLine } from "react-icons/fa";
import Dashboard from "./Dashboard2";
import TicketApproval from "./TicketApproval";
import MyTicket from "./MyTicket";
import Performance from "./p";

export default function Home3() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200  flex flex-col">
        <div className="p-6 text-2xl font-bold italic bg-teal-300">Helpdesk</div>
        <nav className="flex-1">
          <ul>
            <li
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-300 ${
                active === "Dashboard" ? "bg-gray-300" : ""
              }`}
              onClick={() => setActive("Dashboard")}
            >
              <FaTachometerAlt className="mr-3" /> Dashboard
            </li>
            <li
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-300 ${
                active === "TicketApproval" ? "bg-gray-300" : ""
              }`}
              onClick={() => setActive("TicketApproval")}
            >
              <FaTicketAlt className="mr-3" /> Ticket Approval
            </li>
            <li
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-300 ${
                active === "MyTicket" ? "bg-gray-300" : ""
              }`}
              onClick={() => setActive("MyTicket")}
            >
              <FaUserCheck className="mr-3" /> My Ticket
            </li>
            <li
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-300 ${
                active === "Performance" ? "bg-gray-300" : ""
              }`}
              onClick={() => setActive("Performance")}
            >
              <FaChartLine className="mr-3" /> Performance
            </li>
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 overflow-auto bg-gray-50">
        {active === "Dashboard" && <Dashboard />}
        {active === "TicketApproval" && <TicketApproval />}
        {active === "MyTicket" && <MyTicket />}
        {active === "Performance" && <Performance />}
      </main>
    </div>
  );
}
