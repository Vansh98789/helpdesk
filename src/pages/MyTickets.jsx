import { Link } from "react-router-dom";

export default function MyTickets() {
  const tickets = [
    { id: 1234, subject: "Login issue", status: "In Progress", support: "Tech support", date: "13/08/21", rate: 0 },
    { id: 1124, subject: "New ticket issue", status: "On hold", support: "Operation Team", date: "14/08/21", rate: 1 },
    { id: 1224, subject: "New request", status: "Closed", support: "Tech support", date: "13/08/21", rate: 3 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl text-center font-semibold mb-6">List of Tickets</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">Ticket No.</th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Support by</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Rate</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t) => (
              <tr key={t.id} className="border-t">
                <td className="px-4 py-3">
                  <Link to={`/ticket/${t.id}`} className="text-blue-700 underline">
                    {t.id}
                  </Link>
                </td>
                <td className="px-4 py-3">{t.subject}</td>
                <td className="px-4 py-3">
                  <span className="bg-green-300 px-2 py-1 rounded">{t.status}</span>
                </td>
                <td className="px-4 py-3">{t.support}</td>
                <td className="px-4 py-3">{t.date}</td>
                <td className="px-4 py-3">{"★".repeat(t.rate) + "☆".repeat(5 - t.rate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
