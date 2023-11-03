import Container from '@/components/base/Container'
import LogoText from '@/components/logo/LogoText'
import FooterColumn from '@/components/footer/FooterColumn'
import { footerLinks } from '@/constants'

const Footer = () => {
  const now = new Date().getFullYear()
  return (
    <footer className="w-full px-4 pt-16 bg-muted-100">
      <Container>
        <div className="flex flex-col w-full gap-16">
          <div className="flex items-start flex-col">
            <div className="w-36">
              <LogoText classNames="text-danger-600" />
            </div>
            <p className="font-normal mt-5 text-sm max-w-xs">We break down borders to build amazing projects together. Our passionate and experienced team is ready to take on all challenges !</p>
          </div>
          <div className="flex flex-wrap gap-12">
            <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

            <div className="flex flex-1 flex-col gap-4">
              <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
              <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
            </div>

            <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />

            <div className="flex flex-1 flex-col gap-4">
              <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
              <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
            </div>

            <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
          </div>
        </div>

        <div className="flex items-center justify-between max-sm:flex-col w-full text-sm font-normal pt-8 pb-8">
          <p>&copy; Digisquad 2018-{now}. All Rights Reserved </p>
          <p className="text-muted-500">
            <span className="text-muted-800 font-semibold pe-2">10,239</span>
            projects submitted
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
