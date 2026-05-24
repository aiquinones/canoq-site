export type Experience = {
  id: string
  title: string
  subtitle: string
  tag: string
  location: { lat: number; lon: number }
  description: string
}

export const experiences: Experience[] = [
  {
    id: 'microsoft',
    title: 'Microsoft',
    subtitle: 'Copilot · SharePoint & OneDrive',
    tag: 'current',
    location: { lat: 47.64, lon: -122.13 },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 'puc',
    title: 'PUC',
    subtitle: 'BSc. Comp. Sci.\nMSc. NLP',
    tag: 'education',
    location: { lat: -33.44, lon: -70.62 },
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
]
