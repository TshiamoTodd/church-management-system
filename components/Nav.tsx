import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const routes = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Services', path: '/services'},
    {name: 'Contact', path: '/contact'},
];

interface NavProps {
    containerStyles?: string;
    linkStyles?: string;
    underlineStyles?: string;
}

const Nav = ({
    containerStyles,
    linkStyles,
    underlineStyles,
}: NavProps) => {
    const path = usePathname();

    return (
        <nav className={`${containerStyles}`}>
            {routes.map((route, index) => {
                return (
                    <Link
                        href={route.path}
                        key={index}
                        className={`capitalize ${linkStyles}`}
                    >
                        {route.path === path && (
                            <motion.span
                                initial={{y: '-100%'}} 
                                animate={{y: 0}} 
                                transition={{type: 'tween'}}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                            />
                        )}
                        {route.name}
                    </Link>
                )
            })}
        </nav>
    );
}

export default Nav