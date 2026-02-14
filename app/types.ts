import type { ReactNode } from "react"

export interface SectionProps {
  id: string
  title: ReactNode
  subtitle?: ReactNode
  content?: ReactNode
  isActive: boolean
  showButton?: boolean
  buttonText?: string
  buttonLink?: string
}
