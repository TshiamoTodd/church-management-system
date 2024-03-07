'use client';

import { 
  RiYoutubeFill, 
  RiLinkedinFill, 
  RiGithubFill, 
  RiFacebookFill, 
  RiInstagramFill 
} from 'react-icons/ri';

import Link from 'next/link';

interface SocialsProps {
    containerStyles?: string;
    iconStyles?: string;
}

const icons = [
  {
    path: '/',
    name: <RiYoutubeFill/>
  },
  {
    path: '/',
    name: <RiLinkedinFill/>
  },
  {
    path: '/',
    name: <RiGithubFill/>
  },
  {
    path: '/',
    name: <RiFacebookFill/>
  },
  {
    path: '/',
    name: <RiInstagramFill/>
  }
]

const Socials = ({containerStyles, iconStyles}: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials