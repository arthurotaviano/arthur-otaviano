import { Hero } from '@/features/home/components/hero/hero'
import { TechStack } from '@/features/home/components/tech-stack/tech-stack'
import { Work } from '@/features/home/components/work/work'

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Work />
    </>
  )
}
