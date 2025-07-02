import React from "react";

export default function MyTicket() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Ticket</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Ticket No.</th>
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Priority</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Person in charge</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="p-2 border">1234</td>
              <td className="p-2 border">Login issue</td>
              <td className="p-2 border">Access issue</td>
              <td className="p-2 border">High</td>
              <td className="p-2 border">13/08/21</td>
              <td className="p-2 border">In Progress</td>
              <td className="p-2 border">John</td>
              <td className="p-2 border">👥</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
