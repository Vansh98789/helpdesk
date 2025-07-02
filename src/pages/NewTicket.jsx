
export default function NewTicket() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    alert("New ticket registered");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl text-center font-semibold mb-6">Create New Ticket</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div>
          <label>Ticket No.</label>
          <input className="w-full p-2 border shadow" />
        </div>
        <div>
          <label>Date</label>
          <input type="date" className="w-full p-2 border shadow" />
        </div>
        <div>
          <label>Name</label>
          <input className="w-full p-2 border shadow" />
        </div>
        <div>
          <label>Department</label>
          <input className="w-full p-2 border shadow" />
        </div>
        <div className="md:col-span-2">
          <label>Subject</label>
          <input className="w-full p-2 border shadow" />
        </div>
        <div>
          <label>Category</label>
          <input className="w-full p-2 border shadow" />
        </div>
        <div>
          <label>Description</label>
          <textarea className="w-full p-2 border shadow h-24"></textarea>
        </div>
        <div>
          <label>Type</label>
          <input className="w-full p-2 border shadow" />
        </div>
        <div>
          <label>Priority</label>
          <input className="w-full p-2 border shadow" />
        </div>
        <div className="md:col-span-2 mt-4 flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            I'm not a robot
          </label>
          <button type="submit" className="bg-teal-400 px-6 py-2 rounded-md text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
