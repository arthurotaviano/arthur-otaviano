const CONTACT_INFO = {
  githubURL: 'https://github.com/arthurotaviano',
  linkedinURL: 'https://www.linkedin.com/in/arthurotaviano/',
  emailAddress: 'arthurotavianodev@gmail.com',
} as const

export const CONTACT_LINKS = {
  github: CONTACT_INFO.githubURL,
  linkedin: CONTACT_INFO.linkedinURL,
  email: `mailto:${CONTACT_INFO.emailAddress}`,
} as const
