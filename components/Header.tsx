'use client'

import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import ThemeToggler from './ThemeToggler'
import MobileNav from './MobileNav'

const Header = () => {
    const [header, setHeader] = useState(false);

    useEffect(() => {
        const scrollPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });
    }, []);

    return (
        <header className={`${
            header 
            ? 'py-4 bg-white shadow-lg dark:bg-accent' 
            : 'py-6 dark:bg-transparent'
        } z-30 sticky top-0 transition-all`}>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <Logo />
                    <div className='flex items-center gap-x-6'>
                        <Nav
                            containerStyles='hidden xl:flex gap-x-8 items-center'
                            linkStyles='relative hover:text-primary transition-all'
                            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
                        />
                        <ThemeToggler/>
                        <div className='xl:hidden'>
                            <MobileNav/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header