'use client'
import Link from 'next/link'
import Typography from '@components/ui/typography'

export function Footer() {
  return (
    <footer
      className="flex py-2 items-center justify-center w-full bg-[#141414]
        shadow-lg"
    >
      <div className="w-full max-w-[1280px] md:px-8 px-4 flex place-content-center">
        <div className="gap-x-11 md:flex flex-1 hidden">
          <Link
            href="/"
            className="pointer flex items-center"
          >
            <img
              height={30}
              width={30}
              src="logo.svg"
              className="mr-3"
            />
          </Link>
        </div>
        <div className="flex max-w-fit items-center gap-x-4">
          <Link
            href="#"
            target="_blank"
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              Agenda
            </Typography>
          </Link>
          <Link
            href="https://www.instagram.com/arguellespaula/"
            target="_blank"
            className="pointer block w-fit"
          >
            <Typography variant="p">Instagram</Typography>
          </Link>
        </div>
      </div>
    </footer>
  )
}
