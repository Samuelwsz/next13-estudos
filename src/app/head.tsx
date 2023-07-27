import { ReactNode } from "react"

interface HeadProps {
  children: ReactNode
}

export default function Head({ children }: HeadProps) {
  return (
    <>
      <title>{children}</title>
    </>
  )
}
