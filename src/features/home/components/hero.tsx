import { CONTACT_LINKS } from '@/constants/contact'

type LinkProps = {
  label: string
  url: string
  target?: '_blank'
  download?: string
}

export const links: LinkProps[] = [
  {
    label: 'GitHub',
    url: CONTACT_LINKS.GITHUB,
    target: '_blank',
  },
  {
    label: 'LinkedIn',
    url: CONTACT_LINKS.LINKEDIN,
    target: '_blank',
  },
  {
    label: 'Email',
    url: CONTACT_LINKS.EMAIL,
  },
  {
    label: 'Resume',
    url: '/arthur-otaviano-resume.pdf',
    download: 'Arthur Otaviano - Resume.pdf',
  },
]

export function Hero() {
  return (
    <section className='flex flex-col gap-5'>
      <h3 className='sr-only'>About</h3>
      <p className='text-balance leading-normal'>
        I&apos;ve been building websites and web applications for over 10 years. Today I specialize
        in React, Next.js and TypeScript, creating fast, accessible and maintainable digital
        experiences focused on performance, accessibility, SEO and user experience.
      </p>
      <div className='flex flex-wrap gap-5'>
        {links.map(link => (
          <a
            className='link'
            href={link.url}
            target={link.target}
            download={link.download}
            key={link.url}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
