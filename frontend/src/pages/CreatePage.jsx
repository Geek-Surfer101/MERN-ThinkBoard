import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });

      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent relative mx-auto">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6 text-gray-300 hover:text-white hover:bg-white/10 transition-all">
            <ArrowLeftIcon className="size-5 mr-2" />
            Back to Notes
          </Link>

          <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden p-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Create New Note</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300 font-medium">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter a catchy title..."
                  className="input input-bordered w-full bg-gray-900/50 border-gray-600 focus:border-emerald-500 text-white placeholder-gray-500 transition-all focus:ring-2 focus:ring-emerald-500/20"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300 font-medium">Content</span>
                </label>
                <textarea
                  placeholder="What's on your mind?"
                  className="textarea textarea-bordered h-64 w-full bg-gray-900/50 border-gray-600 focus:border-emerald-500 text-white placeholder-gray-500 transition-all focus:ring-2 focus:ring-emerald-500/20 resize-none leading-relaxed"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="btn border-none bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold px-8 py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/20"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm mr-2"></span>
                      Creating...
                    </>
                  ) : (
                    "Create Note"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePage;
