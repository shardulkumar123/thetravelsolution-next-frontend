"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

import { AlertTriangle } from "lucide-react";

import { Button } from "../ui/Button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center p-6 bg-background text-foreground">
          <div className="max-w-md w-full border border-muted bg-muted/20 p-8 rounded-2xl flex flex-col items-center text-center gap-4 shadow-xl">
            <AlertTriangle className="text-red-500 size-16 animate-pulse" />
            <h2 className="text-2xl font-bold font-heading">Application Error</h2>
            <p className="text-sm text-muted-foreground">
              An unexpected error occurred during rendering. We have logged this issue and are
              working on it.
            </p>
            {this.state.error && (
              <pre className="w-full overflow-x-auto text-left text-xs bg-muted/60 p-3 rounded-lg border border-muted font-mono max-h-36 overflow-y-auto">
                {this.state.error.message}
              </pre>
            )}
            <Button onClick={this.handleReload} variant="primary" className="mt-2">
              Reload Application
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
