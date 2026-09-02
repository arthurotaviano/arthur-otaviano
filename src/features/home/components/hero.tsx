import { links } from '../data/hero'

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
