'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { LuMonitor, LuMoon, LuSun } from 'react-icons/lu'

const options = [
  {
    value: 'light',
    label: 'Light',
    icon: LuSun,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: LuMoon,
  },
  {
    value: 'system',
    label: 'System',
    icon: LuMonitor,
  },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])

  const index = options.findIndex(option => option.value === theme)
  const current = mounted && index !== -1 ? options[index] : options[2]
  const next = options[(options.indexOf(current) + 1) % options.length]

  return (
    <button
      className='fixed right-4 bottom-4 z-9999 flex justify-center items-center rounded-full border border-mauve-950 dark:border-white bg-white dark:bg-mauve-950 w-9 h-9 p-2 text-mauve-950 dark:text-white cursor-pointer transform-none active:scale-90 transition-transform'
      type='button'
      aria-label={`Color theme: ${current.label}. Switch to ${next.label}.`}
      onClick={() => setTheme(next.value)}
    >
      <span aria-hidden='true'>
        <current.icon size={16} />
      </span>
    </button>
  )
}
