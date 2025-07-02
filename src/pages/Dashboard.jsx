export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl text-center font-semibold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-500 shadow-md p-6 text-center rounded-md text-white">
          <p>Total Tickets</p>
          <h1 className="text-3xl font-bold">12</h1>
        </div>
        <div className="bg-green-400 shadow-md p-6  text-center rounded-md text-white">
          <p>Total Solved</p>
          <h1 className="text-3xl font-bold">8</h1>
        </div>
        <div className="bg-red-400 shadow-md p-6 text-center rounded-md text-white">
          <p>Total Awaiting Approval</p>
          <h1 className="text-3xl font-bold">2</h1>
        </div>
        <div className="bg-yellow-200 shadow-md p-6 text-center rounded-md text-black">
          <p>Total in Progress</p>
          <h1 className="text-3xl font-bold">2</h1>
        </div>
      </div>
    </div>
  );
}
