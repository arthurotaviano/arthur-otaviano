import { LuGlobe } from 'react-icons/lu'
import { SiGithub } from 'react-icons/si'
import { projects } from './work.data'

export function Work() {
  return (
    <section className='flex flex-col gap-5'>
      <h3 className='text-mauve-950 dark:text-white font-medium'>Work</h3>
      <ul className='flex flex-col gap-4 w-full'>
        {projects.map(project => (
          <li className='border-b border-mauve-200 dark:border-mauve-800' key={project.name}>
            <article className='flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-4 pb-4'>
              <div className='flex flex-col items-start gap-1'>
                <h3 className='text-mauve-950 dark:text-white font-medium'>{project.name}</h3>
                <p className='text-sm text-balance'>{project.description}</p>
              </div>
              <div className='flex items-center gap-1'>
                {project.liveUrl && (
                  <a
                    className='inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-1 bg-mauve-950 dark:bg-white hover:bg-mauve-800 dark:hover:bg-mauve-200 text-white dark:text-mauve-950 text-sm whitespace-nowrap'
                    href={project.liveUrl}
                    target='_blank'
                    aria-label={`View live website for ${project.name}`}
                  >
                    <span aria-hidden='true'>
                      <LuGlobe size={14} />
                    </span>
                    <span className='font-medium'>Live</span>
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    className='inline-flex items-center gap-2 rounded-full border border-mauve-950 dark:border-white px-3 py-1 bg-white dark:bg-mauve-950 hover:bg-mauve-950 dark:hover:bg-white text-mauve-950 dark:text-white hover:text-white dark:hover:text-mauve-950 text-sm whitespace-nowrap'
                    href={project.repoUrl}
                    target='_blank'
                    aria-label={`View source code for ${project.name}`}
                  >
                    <span aria-hidden='true'>
                      <SiGithub size={14} />
                    </span>
                    <span className='font-medium'>Code</span>
                  </a>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
      <p className='text-balance leading-normal'>
        While I&apos;m building this section,{' '}
        <a className='link' href='https://github.com/arthurotaviano' target='_blank'>
          check my GitHub
        </a>{' '}
        to catch up on what I&apos;ve been working on lately. Also, feel free to{' '}
        <a className='link' href='mailto:arthurotavianodev@gmail.com' target='_blank'>
          reach out
        </a>{' '}
        anytime!
      </p>
    </section>
  )
}
