export const CONTACT_INFO = {
  github: 'https://github.com/arthurotaviano',
  linkedin: 'https://www.linkedin.com/in/arthurotaviano/',
  email: 'arthurotavianodev@gmail.com',
} as const

export const CONTACT_LINKS = {
  email: `mailto:${CONTACT_INFO.email}`,
  linkedin: CONTACT_INFO.linkedin,
  github: CONTACT_INFO.github,
} as const
