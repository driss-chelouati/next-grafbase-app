import Link from 'next/link'

import AuthProviders from '@/components/providers/AuthProviders'
import LogoText from '@/components/logo/LogoText'

import { navigationLinks } from '@/constants'

const Navigation = () => {
  const session = null
  return (
    <nav className="relative w-full px-4 border-b border-muted-200">
      <div className="flex items-center justify-between w-full h-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <div>
            <Link href="/" className="flex w-40">
              <LogoText classNames="text-muted-900" />
            </Link>
          </div>
          <ul className="flex items-center gap-4">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="leading-none px-4 py-2 rounded-lg text-muted-500 hover:text-muted-800 hover:bg-muted-100 transition-colors duration-200">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center justify-end'>
          {
            session ? (
              <>
                UserPhoto
                <Link href="/create-project">Share Work</Link>
              </>
            ) : (
              <AuthProviders />
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navigation
