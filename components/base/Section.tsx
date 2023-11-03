import { FC } from 'react'

interface SectionProps {
  children: React.ReactNode
}

const Section: FC<SectionProps> = ({ children }) => {
  return <div className="py-16 px-4">{children}</div>
}

export default Section
