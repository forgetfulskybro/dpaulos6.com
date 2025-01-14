import {
  NextjsIcon,
  ResendIcon,
  ShadcnIcon,
  TailwindIcon,
  TypescriptIcon
} from '@/icons'
import { Contribution, Project } from '@/interfaces'
import { Ellipsis } from 'lucide-react'

export const projects: Project[] = [
  {
    name: 'Portfolio',
    thumbnail: '/thumbnail.png',
    description:
      'This website is an attempt to describe who I am as a person, using a color palette that I enjoy. All of the content included and design of the website is as much unique as my creativity allows, trying to reflect my style and vibe.',
    technologies: [
      { label: 'NextJS', icon: NextjsIcon },
      { label: 'Typescript', icon: TypescriptIcon },
      { label: 'Tailwind CSS', icon: TailwindIcon },
      { label: 'Shadcn UI', icon: ShadcnIcon }
    ],
    github: 'https://github.com/dpaulos6/portfolio',
    url: 'https://dpaulos6.xyz/',
    tag: {
      styles: 'border-transparent bg-primary-hover text-primary-foreground',
      label: 'active portfolio'
    },
    currentWebsite: true
  },
  {
    name: 'Slotbot Website',
    thumbnail: 'https://i.imgur.com/mckEczF.png',
    description:
      'This is the new and modern website for SlotBot, an innovative Discord bot designed for economic simulation and competitive PvP gameplay across multiple servers. The website serves as a central hub for SlotBot users and server administrators, providing a seamless experience for accessing bot features and settings.',
    technologies: [
      { label: 'NextJS', icon: NextjsIcon },
      { label: 'Typescript', icon: TypescriptIcon },
      { label: 'Tailwind CSS', icon: TailwindIcon },
      { label: 'Among others', icon: Ellipsis }
    ],
    tag: {
      styles: 'border-transparent bg-yellow-300 dark:bg-yellow-500 text-black',
      label: 'almost finished'
    }
  },
  {
    name: 'Digestify',
    thumbnail: '/thumbnails/digestify.png',
    description: `This web application provides a comprehensive set of tools for hashing, encryption, key generation, and more. Whether you're a developer, security enthusiast, or just need to ensure data integrity, Digestify offers a variety of features to meet your needs.`,
    technologies: [
      { label: 'NextJS', icon: NextjsIcon },
      { label: 'Typescript', icon: TypescriptIcon },
      { label: 'Tailwind CSS', icon: TailwindIcon },
      { label: 'Shadcn UI', icon: ShadcnIcon },
      { label: 'Among others', icon: Ellipsis }
    ],
    github: 'https://github.com/dpaulos6/digestify',
    url: 'https://digestify.dev',
    tag: {
      styles: 'border-transparent bg-yellow-300 dark:bg-yellow-500 text-black',
      label: 'under development'
    },
    currentWebsite: false
  },
  {
    name: 'Would You Bot',
    thumbnail: 'https://i.imgur.com/BsWSxze.png',
    description:
      'Play fun and entertaining games with Would You, featuring user polls and customization. Play Would You Rather, Never Have I Ever, Higher or Lower, and What Would You Do!',
    technologies: [
      { label: 'NextJS', icon: NextjsIcon },
      { label: 'Typescript', icon: TypescriptIcon },
      { label: 'Tailwind CSS', icon: TailwindIcon },
      { label: 'Shadcn UI', icon: ShadcnIcon },
      { label: 'Among others', icon: Ellipsis }
    ],
    github: 'https://github.com/Would-You-Bot/website-app',
    url: 'https://wouldyoubot.gg/',
    tag: {
      styles: 'border-transparent bg-primary-hover text-primary-foreground',
      label: 'web developer'
    }
  },
  {
    name: 'FishWiki',
    thumbnail: '/thumbnails/fishwiki.png',
    description: 'Aquatic Encyclopedia on Discord.',
    technologies: [
      { label: 'NextJS', icon: NextjsIcon },
      { label: 'Typescript', icon: TypescriptIcon },
      { label: 'Tailwind CSS', icon: TailwindIcon }
    ],
    url: 'https://fishwiki.app/',
    tag: {
      styles: 'border-transparent bg-green-300 dark:bg-green-500 text-black',
      label: 'finished'
    }
  }
]

export const contributions: Contribution[] = [
  {
    name: 'Nizzy Starter',
    url: 'https://www.nizzystarter.com/',
    github: 'https://github.com/NizarAbiZaher/nizzy-starter',
    thumbnail: '/thumbnails/nizzystarter.png',
    description:
      'Nizzy Starter is an open-source SaaS Starter Kit with bare minimum configuration, ready to go.',
    role: 'Styling and documentation'
  },
  {
    name: 'nizzyabi',
    url: 'https://www.nizzyabi.com/',
    github: 'https://github.com/NizarAbiZaher/platform',
    thumbnail: '/thumbnails/nizzyabi.png',
    description:
      'Nizzyabi.com is a Programming Course Platform for self-taught developers who want to improve their web development skills.',
    role: 'Styling and documentation'
  }
]
