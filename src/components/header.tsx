/* eslint-disable @next/next/no-img-element */
export function Header() {
  return (
    <header className='flex items-center gap-3'>
      <img
        className='rounded-full'
        src='/arthur-otaviano.jpg'
        srcSet='/arthur-otaviano.jpg 1x, /arthur-otaviano-2x.jpg 2x'
        alt='Arthur Otaviano'
      />
      <div className='flex flex-col'>
        <h1 className='font-medium text-mauve-950 text-[17px] md:text-lg'>Arthur Otaviano</h1>
        <h2>Front-End Developer</h2>
      </div>
    </header>
  )
}
