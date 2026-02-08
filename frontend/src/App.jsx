import { Route, Routes, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="relative h-full w-full min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />

      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />

      <SignedIn>
        <Navbar />
      </SignedIn>

      <main className="p-4 max-w-6xl mx-auto">
        <SignedOut>
          <LoginPage />
        </SignedOut>

        <SignedIn>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/note/:id" element={<NoteDetailPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </SignedIn>
      </main>
      <Toaster />
    </div>
  );
};
export default App;
