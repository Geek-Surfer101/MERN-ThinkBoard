import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                    Welcome to ThinkBoard
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto">
                    Your personal space to capture, organize, and create notes effortlessly.
                </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 shadow-2xl hover:shadow-emerald-500/10 transition-shadow duration-300">
                <SignIn forceRedirectUrl="/" appearance={{
                    elements: {
                        rootBox: "mx-auto",
                        card: "bg-transparent shadow-none w-full",
                        headerTitle: "text-white",
                        headerSubtitle: "text-gray-400",
                        socialButtonsBlockButton: "bg-white/5 hover:bg-white/10 border-gray-600 text-white",
                        formFieldLabel: "text-gray-300",
                        formFieldInput: "bg-gray-700/50 border-gray-600 text-white",
                        footerActionLink: "text-emerald-400 hover:text-emerald-300",
                        identityPreviewText: "text-gray-300",
                        formButtonPrimary: "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 border-none",
                    }
                }} />
            </div>
        </div>
    );
};

export default LoginPage;
