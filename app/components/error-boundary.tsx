"use client"

import { Component, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home } from "lucide-react"
import Link from "next/link"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Error caught by boundary:", error, errorInfo)
    // You can log this to your error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#F4E1C1] px-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-[#3A7D44] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-[#F4E1C1] font-bold text-2xl">!</span>
            </div>
            <h1 className="text-2xl font-bold text-[#1A4E8A] mb-4">
              Something went wrong
            </h1>
            <p className="text-[#8B6F47] mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page or return to the homepage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => window.location.reload()}
                className="bg-[#FFB347] hover:bg-[#FFB347]/90 text-[#1A4E8A]"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Page
              </Button>
              <Button asChild variant="outline" className="border-[#C19A6B] text-[#1A4E8A] hover:bg-[#C19A6B] hover:text-[#F4E1C1]">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
