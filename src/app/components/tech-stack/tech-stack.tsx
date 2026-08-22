import { stack } from './tech-stack.data'

export function TechStack() {
  return (
    <section>
      <h3 className='sr-only'>Tech Stack</h3>
      <ul className='flex flex-wrap gap-x-1.5 gap-y-2'>
        {stack.map(tech => (
          <li key={tech.name}>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-mauve-200 px-4 py-2 text-mauve-700 text-sm'>
              <span aria-hidden='true'>
                <tech.icon className='size-3.5 fill-mauve-400' />
              </span>
              <span className='font-medium'>{tech.name}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
