"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'mb-4 shrink-0 self-center bg-border mt-2 lg:mt-0',
        orientation === 'horizontal' ? 'h-[1px] w-4/5' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
  ),
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
