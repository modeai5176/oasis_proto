import type { LucideCrop as LucideProps } from "lucide-react"

export function CamelIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 18c0-1.5 1-3 2.5-3.5C7.5 14 8 13 8 12c0-2 1-3 2-3s2 1 2 3c0 1 .5 2 1.5 2.5C15 15 16 16.5 16 18" />
      <path d="M8 12V8c0-1 .5-2 1.5-2S11 7 11 8v4" />
      <path d="M13 12V8c0-1 .5-2 1.5-2S16 7 16 8v4" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M12 4c-1 0-2 .5-2 1.5S11 7 12 7s2-.5 2-1.5S13 4 12 4z" />
    </svg>
  )
}

export function ElephantIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2c-3 0-5 2-5 5v3c0 2-1 3-2 3s-2-1-2-3V8c0-1 0-2 1-2" />
      <path d="M12 10c3 0 5-2 5-5V2" />
      <path d="M7 10v8c0 1 1 2 2 2h6c1 0 2-1 2-2v-8" />
      <circle cx="9" cy="6" r="1" />
      <path d="M19 10c1 0 2 1 2 2v2c0 2-1 3-2 3" />
    </svg>
  )
}

export function OasisIcon(props: LucideProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2c-2 0-4 2-4 4v2c0 3 2 5 4 5s4-2 4-5V6c0-2-2-4-4-4z" />
      <path d="M8 8c-1 0-2 1-2 2v1c0 2 1 3 2 3" />
      <path d="M16 8c1 0 2 1 2 2v1c0 2-1 3-2 3" />
      <ellipse cx="12" cy="20" rx="8" ry="2" />
      <path d="M4 18c0 1 3.5 2 8 2s8-1 8-2" />
    </svg>
  )
}
