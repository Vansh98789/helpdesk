import React from "react";
import { PiHeadsetBold, PiHeadsetFill } from "react-icons/pi";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Top stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-500 text-white rounded-lg shadow p-6 text-center">
          <div className="text-lg">Total Tickets</div>
          <div className="text-4xl font-bold">12</div>
        </div>
        <div className="bg-green-400 text-white rounded-lg shadow p-6 text-center">
          <div className="text-lg">Total Solved</div>
          <div className="text-4xl font-bold">8</div>
        </div>
        <div className="bg-red-400 text-white rounded-lg shadow p-6 text-center">
          <div className="text-lg">Total Awaiting Approval</div>
          <div className="text-4xl font-bold">2</div>
        </div>
        <div className="bg-yellow-300 text-black rounded-lg shadow p-6 text-center">
          <div className="text-lg">Total in Progress</div>
          <div className="text-4xl font-bold">2</div>
        </div>
      </div>

      {/* Middle section */}
      <div className="grid grid-cols-3 gap-4">
        {/* Replace graph symbol with a graph image */}
        <div className="bg-teal-300 rounded-lg p-6 flex items-center justify-center">
          <img 
            src="data:image/png;base64,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" 
            alt="Graph"
            className="max-h-48"
          />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div className="bg-teal-300 rounded-lg p-6 text-center flex flex-col items-center">
            <PiHeadsetBold size={32} className="mb-2" />
            <div className="text-2xl">3</div>
            <div>Technical Supports</div>
          </div>
          <div className="bg-teal-300 rounded-lg p-6 text-center flex flex-col items-center">
            <PiHeadsetFill size={32} className="mb-2" />
            <div className="text-2xl">4</div>
            <div>Operation Team</div>
          </div>
        </div>
      </div>

      {/* Customer feedback full-width below */}
      <div className="bg-teal-300 rounded-lg p-6 text-center mt-4">
        <div className="mb-2">Customer Feedback</div>
        ⭐⭐⭐⭐☆
      </div>
    </div>
  );
}
