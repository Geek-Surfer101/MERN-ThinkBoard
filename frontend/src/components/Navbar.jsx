import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-50 transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-sans tracking-tight hover:opacity-80 transition-opacity cursor-pointer">
              ThinkBoard
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to={"/create"}
              className="btn btn-sm md:btn-md gap-2 border-none bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-emerald-500/20 transition-all rounded-xl"
            >
              <PlusIcon className="size-5" />
              <span className="hidden sm:inline font-medium">New Note</span>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
