import { cn } from '@/lib/utils'
import {
  cva,
  type VariantProps
} from 'class-variance-authority'
import React from 'react'

export const typographyVariants = cva('text-xl', {
  variants: {
    variant: {
      h1: 'md:text-5xl scroll-m-20 text-3xl font-extrabold tracking-tight merriweather-sans-regular text-gray-300',
      h2: 'scroll-m-20 pb-2 md:text-3xl text-2xl font-semibold tracking-tight first:mt-0 merriweather-sans-regular text-gray-300',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight montserrat-regular text-gray-300',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight montserrat-regular text-gray-300',
      h5: 'scroll-m-18 text-lg tracking-tight text-minor montserrat-regular text-gray-300',
      h6: 'scroll-m-18 text-md tracking-tight text-minor montserrat-regular text-gray-300',
      p: 'md:text-sm text-sm leading-7 text-minor montserrat-regular text-gray-300'
    },
    affects: {
      default: '',
      lead: 'md:text-xl text-xl font-normal',
      large: 'md:text-lg text-lg font-semibold',
      small: 'md:text-sm text-sm font-medium leading-none',
      muted: 'md:text-sm text-sm text-muted-foreground',
      removePMargin: '[&:not(:first-child)]:mt-0'
    }
  },
  defaultVariants: {
    variant: 'p',
    affects: 'default'
  }
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<
  HTMLHeadingElement,
  TypographyProps
>(({ className, variant, affects, ...props }, ref) => {
  const Comp = variant ?? 'p'
  return (
    <Comp
      ref={ref}
      {...props}
      className={cn(
        typographyVariants({ variant, affects }),
        className
      )}
    />
  )
})
Typography.displayName = 'Typography'

export default Typography
