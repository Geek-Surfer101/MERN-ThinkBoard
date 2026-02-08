import { useState } from "react";
import RateLimitedUI from "../components/RateLimitedUI";
import { useEffect } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes");
        console.log(error.response);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative">
      <div className="max-w-7xl mx-auto p-4 relative z-10">

        {isRateLimited && <RateLimitedUI />}

        {loading && (
          <div className="flex justify-center items-center h-[50vh]">
            <span className="loading loading-spinner loading-lg text-emerald-500"></span>
          </div>
        )}

        {notes.length === 0 && !isRateLimited && !loading && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && !loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Button for Mobile / Quick Access */}
      {!loading && !isRateLimited && (
        <div className="fixed bottom-8 right-8 z-50 md:hidden">
          {/* Add FAB logic here if needed or rely on Navbar */}
        </div>
      )}
    </div>
  );
};
export default HomePage;
