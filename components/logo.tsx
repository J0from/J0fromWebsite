import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
  withGradient?: boolean
}

/**
 * The qubit icon uses `em` units so it scales automatically
 * with the surrounding font-size set by the parent element.
 * Choose a `size` preset or let the parent text-size drive it.
 */
const sizeClasses = {
  xs: "text-sm sm:text-base",
  sm: "text-base sm:text-lg",
  md: "text-lg sm:text-xl md:text-2xl",
  lg: "text-xl sm:text-2xl md:text-3xl",
  xl: "text-3xl sm:text-4xl md:text-5xl lg:text-7xl",
}

export function Logo({ size = "md", className, withGradient = true }: LogoProps) {
  const sizeClass = sizeClasses[size]

  return (
    <span className={cn("inline-flex items-center font-bold", sizeClass, className)}>
      <span>J</span>
      <span
        className="relative inline-block mx-[0.05em]"
        style={{ width: "0.75em", height: "0.75em" }}
      >
        <Image
          src="/qubit.png"
          alt="Qubit"
          fill
          sizes="48px"
          className={cn("object-contain", withGradient ? "brightness-0" : "")}
          priority
        />
        {withGradient && (
          <span
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
            style={{
              maskImage: `url('/qubit.png')`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskImage: `url('/qubit.png')`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
            }}
          />
        )}
      </span>
      <span> from</span>
    </span>
  )
}
