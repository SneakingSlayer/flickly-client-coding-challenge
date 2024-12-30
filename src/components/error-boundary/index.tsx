import React, { Component, ReactNode } from 'react';

// Define the types for the state of the ErrorBoundary
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

// Define the types for the props of the ErrorBoundary
interface ErrorBoundaryProps {
    children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    // This method is called when an error occurs in a child component
    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error: error, errorInfo: null };
    }

    // This method is called to catch and log the error
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        if (this.state.hasError) {
            // Display a fallback UI in case of error
            return (
                <div className="flex justify-center items-center h-[100dvh] w-full">
                    <p>Something went wrong...</p>
                </div>
            );
        }

        // Render the children if no error occurs
        return this.props.children;
    }
}

export default ErrorBoundary;
