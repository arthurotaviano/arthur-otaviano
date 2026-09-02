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
