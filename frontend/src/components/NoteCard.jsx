import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // get rid of the navigation behaviour

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // get rid of the deleted one
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-gray-800/40 backdrop-blur-md border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 group h-64 overflow-hidden relative"
    >
      <div className="card-body p-6">
        <h3 className="card-title text-xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors mb-2 line-clamp-1">{note.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-4 mb-4">{note.content}</p>

        <div className="card-actions justify-between items-center mt-auto border-t border-gray-700/30 pt-4">
          <span className="text-xs font-medium text-gray-500 font-mono">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              className="btn btn-ghost btn-circle btn-sm text-gray-400 hover:text-white hover:bg-gray-700/50"
              onClick={(e) => {
                e.preventDefault();
                // Add edit logic navigation or modal if needed, currently links to detail page
              }}
            >
              <PenSquareIcon className="size-4" />
            </button>
            <button
              className="btn btn-ghost btn-circle btn-sm text-gray-400 hover:text-red-400 hover:bg-red-500/10"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>

        {/* Gradient overlay at bottom to fade out text */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none" />
      </div>
    </Link>
  );
};
export default NoteCard;
