"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      try {
        // Monitor Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          if (lastEntry) {
            console.log("LCP:", lastEntry.startTime)
            // You can send this to your analytics service
          }
        })
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })

        // Monitor First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            console.log("FID:", entry.processingStart - entry.startTime)
            // You can send this to your analytics service
          })
        })
        fidObserver.observe({ entryTypes: ["first-input"] })

        // Monitor Cumulative Layout Shift (CLS)
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          console.log("CLS:", clsValue)
          // You can send this to your analytics service
        })
        clsObserver.observe({ entryTypes: ["layout-shift"] })

        return () => {
          lcpObserver.disconnect()
          fidObserver.disconnect()
          clsObserver.disconnect()
        }
      } catch (error) {
        console.warn("Performance monitoring not supported:", error)
      }
    }
  }, [])

  return null
}
