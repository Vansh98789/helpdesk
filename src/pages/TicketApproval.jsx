import React from "react";

export default function TicketApproval() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Ticket Approval</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Ticket No.</th>
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Priority</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Action</th>
              <th className="p-2 border">Assign to</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="p-2 border">1234</td>
              <td className="p-2 border">Login issue</td>
              <td className="p-2 border">Access issue</td>
              <td className="p-2 border">High</td>
              <td className="p-2 border">13/08/21</td>
              <td className="p-2 border">✔ ✖</td>
              <td className="p-2 border">▼</td>
            </tr>
            {/* Repeat rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
    