import { CONTACT_LINKS } from '@/constants/contact'

type ProjectProps = {
  name: string
  description: string
  liveUrl?: string
  repoUrl?: string
}

export const projects: ProjectProps[] = [
  {
    name: 'Larissa Machado',
    description: 'Sr Graphic Designer portfolio.',
    liveUrl: 'https://www.larissamachado.com.br/',
    repoUrl: `${CONTACT_LINKS.GITHUB}/larissa-machado`,
  },
]
