import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import Logo from './Logo'
import Nav from './Nav'
import Socials from './Socials'
import { Button } from './ui/button'

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <AlignJustify className='cursor-pointer h-6 w-6'/>
        </SheetTrigger>
        <SheetContent>
            <div className='flex flex-col items-center justify-between h-full py-8'>
                <div className='flex flex-col items-center gap-y-32'>
                    <Logo/>
                    <Nav
                        containerStyles='flex flex-col gap-y-6 items-center'
                        linkStyles='text-2xl'
                    />
                    <div className='flex flex-row gap-x-2'>
                        <Button
                            size='default'
                            className='w-40'
                        >
                            Sign In
                        </Button>
                        <Button
                            size='default'
                            variant='outline'
                            className='w-40'
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
                <Socials
                    containerStyles='flex gap-x-4 justify-center mt-8'
                    iconStyles='text-2xl'
                />
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav