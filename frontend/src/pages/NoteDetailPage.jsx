import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent relative mx-auto">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="btn btn-ghost text-gray-300 hover:text-white hover:bg-white/10 transition-all">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Notes
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 border-red-500/50 hover:border-red-500 transition-all"
            >
              <Trash2Icon className="h-5 w-5 mr-2" />
              Delete Note
            </button>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden p-8">
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text text-gray-400 text-sm font-medium uppercase tracking-wider">Title</span>
              </label>
              <input
                type="text"
                placeholder="Note title"
                className="input input-ghost w-full text-3xl font-bold text-white placeholder-gray-600 border-b border-gray-700 focus:border-emerald-500 bg-transparent px-0 h-auto py-2 focus:ring-0 transition-colors"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
              />
            </div>

            <div className="form-control mb-8">
              <label className="label">
                <span className="label-text text-gray-400 text-sm font-medium uppercase tracking-wider">Content</span>
              </label>
              <textarea
                placeholder="Write your note here..."
                className="textarea textarea-ghost w-full h-[50vh] text-lg text-gray-200 placeholder-gray-600 bg-transparent border-none focus:ring-0 resize-none leading-relaxed px-0"
                value={note.content}
                onChange={(e) => setNote({ ...note, content: e.target.value })}
              />
            </div>

            <div className="flex justify-end pt-6 border-t border-gray-700/50">
              <button
                className="btn border-none bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold px-8 py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/20"
                disabled={saving}
                onClick={handleSave}
              >
                {saving ? (
                  <>
                    <span className="loading loading-spinner loading-sm mr-2"></span>
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoteDetailPage;
