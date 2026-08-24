type LinksProps = {
  label: string
  url: string
  target?: '_blank'
  download?: string
}

export const links: LinksProps[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/arthurotaviano',
    target: '_blank',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arthurotaviano/',
    target: '_blank',
  },
  {
    label: 'Email',
    url: 'mailto:arthurotavianodev@gmail.com',
  },
  {
    label: 'Resume',
    url: '/arthur-otaviano-resume.pdf',
    download: 'Arthur Otaviano - Resume.pdf',
  },
]
