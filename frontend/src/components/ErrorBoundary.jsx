import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gray-900 text-red-500 p-8 font-mono overflow-auto">
                    <h1 className="text-4xl font-bold mb-4">Something went wrong.</h1>
                    <div className="bg-black/50 p-6 rounded-xl border border-red-500/30">
                        <h2 className="text-xl font-bold text-red-400 mb-2">{this.state.error && this.state.error.toString()}</h2>
                        <details className="whitespace-pre-wrap text-sm text-gray-400">
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </details>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
