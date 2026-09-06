import type { IconType } from 'react-icons'
import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

type HeroTechProps = {
  name: string
  icon: IconType
}

export const stack: HeroTechProps[] = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Git', icon: SiGit },
  { name: 'Vercel', icon: SiVercel },
]

export function TechStack() {
  return (
    <section>
      <h3 className='sr-only'>Tech Stack</h3>
      <ul className='flex flex-wrap gap-x-1.5 gap-y-2'>
        {stack.map(tech => (
          <li key={tech.name}>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-mauve-200 dark:border-mauve-800 px-4 py-2 text-mauve-700 dark:text-mauve-400 text-sm'>
              <span aria-hidden='true'>
                <tech.icon className='size-3.5 fill-mauve-400 dark:fill-mauve-300' />
              </span>
              <span className='font-medium'>{tech.name}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
