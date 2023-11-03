import { FC } from 'react'
import Link from 'next/link'

interface FooterColumnProps {
  title: string
  links: Array<string>
}

const FooterColumn: FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
      <h4 className="font-semibold">{title}</h4>
      <ul className="fex flex-col gap-3 font-normal">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link} className="text-muted-500 hover:text-muted-800 transition-colors duration-200">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn
