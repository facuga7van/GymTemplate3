import * as React from 'react'
import {
  cva,
  type VariantProps
} from 'class-variance-authority'
import { cn } from '@/lib/utils'

const dividerVariants = cva('flex', {
  variants: {
    variant: {
      default: 'text-gray-500',
      primary: 'text-primary',
      secondary: 'text-secondary',
      destructive: 'text-destructive',
      outline: 'text-foreground'
    },
    size: {
      default: 'h-px',
      sm: 'corinthia-regular pb-2 md:text-[80px] text-2xl tracking-tight first:mt-0 text-black',
      lg: 'corinthia-regular pb-2 md:text-[80px] text-2xl tracking-tight first:mt-0 text-white'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  image?: string
  text?: string
}

const Divider = React.forwardRef<
  HTMLDivElement,
  DividerProps
>(
  (
    { className, variant, size, image, text, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          dividerVariants({ variant, size, className }),
          ''
        )}
        ref={ref}
        {...props}
      >
        {image && (
          <img
            src={image}
            alt={text ?? 'Divider Image'}
            className="divider-image"
          />
        )}
        {text && (
          <span className="divider-text">{text}</span>
        )}
      </div>
    )
  }
)

Divider.displayName = 'Divider'

export { Divider, dividerVariants }
