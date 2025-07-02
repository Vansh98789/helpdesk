import { useParams, useNavigate } from "react-router-dom";

export default function TicketDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg text-left">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Ticket Details</h2>

        <div className="space-y-2 text-sm">
          <p><span className="font-semibold">Ticket No:</span> {id}</p>
          <p><span className="font-semibold">Date:</span> 13/08/21</p>
          <p><span className="font-semibold">Name:</span> Vansh</p>
          <p><span className="font-semibold">Department:</span> Tech</p>
          <p><span className="font-semibold">Title:</span> Login issue</p>
          <p><span className="font-semibold">Description:</span> Unable to log in.</p>
          <p><span className="font-semibold">Category:</span> Access</p>
          <p><span className="font-semibold">Type:</span> Bug</p>
          <p><span className="font-semibold">Priority:</span> High</p>
          <p><span className="font-semibold">Status:</span> In Progress</p>
          <p><span className="font-semibold">Attachment:</span> None</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
