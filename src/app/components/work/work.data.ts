export type ProjectProps = {
  name: string
  description: string
  liveUrl?: string
  repoUrl?: string
}

export const projects: ProjectProps[] = [
  {
    name: 'Project Name #1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum et.',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    name: 'Project Name #2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum harum et.',
    repoUrl: '#',
  },
]
