import Link from 'next/link'
import { LuChevronLeft } from 'react-icons/lu'

export default function NotFoumd() {
  return (
    <section className='flex flex-col items-start gap-5'>
      <h3 className='sr-only'>Page Not Found</h3>
      <p className='text-balance leading-normal'>The page you’re looking for can’t be found.</p>
      <Link className='link flex items-center gap-1' href='/'>
        <LuChevronLeft />
        <span>Back to homepage</span>
      </Link>
    </section>
  )
}
