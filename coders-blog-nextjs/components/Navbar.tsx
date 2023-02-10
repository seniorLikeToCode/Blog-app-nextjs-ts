import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
    return <>
        <nav className='flex items-center justify-between py-6'>
            <Link href='/'>
                <div className='flex item-center cursor-pointer'>
                    <Image src='/logo.png' alt='website logo' height={35} width={40} />
                    <span className='font-bold ml-3 text-primary'>Coder's Blog</span>
                </div>
            </Link>
            <div>
                <a className='mr-5 font-medium text-gray-600' href='#'>Products</a>
                <a className='mr-5 font-medium text-gray-600' href='#'>Pricing</a>
                <a className='mr-5 font-medium text-gray-600' href='#'>Docs</a>
                <a className='mr-5 font-medium text-gray-600' href='#'>Company</a>
            </div>

            <div>
                <a href='#' className='mr-6 font-medium text-gray-600 hover:text-gray-400'>Log in</a>
                <a href='#' className='font-medium bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition all'>Sign up</a>
            </div>
        </nav>
    </>
}

export default Navbar;