import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-37 w-full border-0 border-b-2 border-entertainment-greyish-blue bg-transparent pt-2 pb-3 pl-4 text-sm font-light text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
