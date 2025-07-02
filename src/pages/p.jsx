import React from "react";

export default function Performance() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Performance</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow max-w-md">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full" />
          <div>
            <div className="font-bold">Operation Name</div>
            <div className="text-sm">Contact: 0123456789</div>
            <div className="text-sm">Dept: ABC</div>
          </div>
        </div>
        <div className="mt-4">
          <div>Total Ticket Handle: 5</div>
          <div>Ticket Solved: 2</div>
          <div>Ticket Pending: 1</div>
          <div>Ticket in Progress: 2</div>
          <div>Rating: ⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>
  );
}
