'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Typography from '@/components/ui/typography'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '@/components/ui/drawer'
import { MenuIcon, X } from 'lucide-react'

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className }: SidebarProps) {
  const pathname = usePathname()
  const items = [
    {
      href: '#',
      title: 'Agenda',
      openInNewTab: true
    },
    { href: '#', title: 'Preguntas frecuentes' },
    {
      href: '#',
      title: 'Contacto'
    }
  ]

  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
      <img
        height={30}
        width={30}
        src="/logo.svg"
        className="mr-3"
      />
    </Link>
  )

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href ||
            pathname.includes(item.href)
          return (
            <Link
              href={item.href}
              className={cn(
                `py-1 pointer block w-fit bg-left-bottom bg-gradient-to-r
                  from-transparent to-transparent bg-[length:0%_3px]
                  bg-no-repeat hover:bg-[length:100%_3px] hover:from-[#4b0c0c]
                  hover:to-[#4b0c0c] transition-all duration-500 ease-out`,
                selected && 'text-primary'
              )}
              target={item.openInNewTab ? '_blank' : ''}
              key={item.title}
            >
              <Typography
                variant="p"
                className={cn(selected && 'text-primary')}
              >
                {item.title}
              </Typography>
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <div
      style={{
        filter:
          'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))'
      }}
      className={cn(
        `flex py-2 items-center justify-center w-full
          shadow-[0_6px_20px_-15px_rgba(0,0,0,0.2)] bg-[#141414]`,
        className
      )}
    >
      <div className="w-full max-w-[1280px] md:px-8 px-4">
        {/* Desktop */}
        <div className="flex items-center gap-x-8 w-full">
          <div className="md:flex-0 min-w-fit flex-1">
            {getLogo()}
          </div>
          <div className="hidden md:flex flex items-center w-full">
            <div className="flex items-center gap-x-8 flex-1"></div>
            <div className="flex items-center gap-x-8">
              {getHeaderItems()}
            </div>
          </div>
          {/* Mobile */}
          <div className="group md:hidden flex gap-x-4 items-center">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="w-full flex items-end justify-end">
                        <X />
                      </div>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="space-y-4">
                    {getHeaderItems()}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  )
}
