import { CONTACT_LINKS } from '@/constants/contact'

type LinksProps = {
  label: string
  url: string
  target?: '_blank'
  download?: string
}

export const links: LinksProps[] = [
  {
    label: 'GitHub',
    url: CONTACT_LINKS.github,
    target: '_blank',
  },
  {
    label: 'LinkedIn',
    url: CONTACT_LINKS.linkedin,
    target: '_blank',
  },
  {
    label: 'Email',
    url: CONTACT_LINKS.email,
  },
  {
    label: 'Resume',
    url: '/arthur-otaviano-resume.pdf',
    download: 'Arthur Otaviano - Resume.pdf',
  },
]
