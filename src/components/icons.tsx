import type { LucideCrop as LucideProps } from "lucide-react"

export function CamelIcon(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 18c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z" />
      <path d="M16 18c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z" />
      <path d="M6 16V8c0-2 2-4 4-4h4c2 0 4 2 4 4v8" />
      <path d="M10 4c0-1 1-2 2-2s2 1 2 2" />
      <path d="M14 8c1-1 2-1 3 0" />
    </svg>
  )
}

export function ElephantIcon(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2c-4 0-8 3-8 8v4c0 2 1 4 3 4h2v4h6v-4h2c2 0 3-2 3-4v-4c0-5-4-8-8-8z" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M12 14c-1 0-2-1-2-2h4c0 1-1 2-2 2z" />
      <path d="M4 14c-1 0-2-1-2-2s1-2 2-2" />
    </svg>
  )
}
