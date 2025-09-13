"use client"

import { useEffect, ReactNode } from "react"
import { initAllAnimations } from "@/app/utils/animations"

interface AnimationWrapperProps {
  children: ReactNode
}

export function AnimationWrapper({ children }: AnimationWrapperProps) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Only initialize animations if user doesn't prefer reduced motion
    if (!prefersReducedMotion) {
      const cleanup = initAllAnimations()
      
      // Cleanup function to remove event listeners
      return () => {
        if (cleanup && typeof cleanup === 'function') {
          cleanup()
        }
      }
    }
  }, [])

  return <>{children}</>
}
