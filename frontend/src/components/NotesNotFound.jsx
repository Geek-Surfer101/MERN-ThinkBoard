import { NotebookIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 space-y-8 max-w-lg mx-auto text-center animate-in fade-in zoom-in duration-500">
      <div className="bg-gray-800/50 p-8 rounded-full border border-gray-700/50 shadow-xl shadow-emerald-500/5">
        <NotebookIcon className="size-16 text-emerald-400 opacity-80" />
      </div>
      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-white tracking-tight">No notes created yet</h3>
        <p className="text-gray-400 text-lg max-w-xs mx-auto leading-relaxed">
          Your mind is a beautiful place. Let's start capturing your thoughts.
        </p>
      </div>
      <Link
        to="/create"
        className="btn btn-lg border-none bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold px-10 shadow-xl hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-1 rounded-full"
      >
        <PlusIcon className="size-5 mr-2" />
        Create Your First Note
      </Link>
    </div>
  );
};
// Force update
export default NotesNotFound;
