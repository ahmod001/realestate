"use client"
import { Container, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';



const Footer = () => {
    // This Class for Link
    class Link {
        constructor(name, href) {
            this.name = name;
            this.href = href;
        }
    }
    // Media Query
    const isLargeScreen = useMediaQuery('(min-width:1024px)')

    return (
        <footer className='' style={{ backgroundColor: '#F8FCFD' }}>
            <Container sx={{ py: isLargeScreen ? 6.8 : 4.5 }}>
                <div className='grid md:grid-cols-4 lg:grid-cols-7 sm:grid-cols-4 grid-cols-3 sm:gap-x-2 lg:gap-x-0 gap-x-1.5 sm:gap-y-9 lg:gap-y-0 gap-y-7'>

                    <div className='col-span-3 sm:col-span-4 lg:col-span-3 sm:space-y-5 space-y-3'>
                        {/* Brand_Logo */}
                        <img
                            className='max-h-8 md:max-h-9'
                            src="/logo.png"
                            alt="Realhome." />

                        {/* Description */}
                        <p className='lg:text-base text-sm w-11/12 sm:w-10/12  tracking-wide text-gray-500'>
                            Our vision is to make everyone’s life comfortable and peaceful in their residence.
                        </p>

                    </div>

                    {/* Services */}
                    <Links
                        title={'Services'}
                        linksArray={[
                            new Link('Buy a house'),
                            new Link('Rent a house'),
                            new Link('Sell a house')]} />

                    {/* About Us*/}
                    <Links
                        title={'About us'}
                        linksArray={[new Link('About Us', '/about-us'),
                        new Link('Features'),
                        new Link('News & Blogs')]} />

                    {/* Company */}
                    <Links
                        title={'Company'}
                        linksArray={[new Link('How we work'),
                        new Link('Capital'),
                        new Link('Security')]} />

                    {/* Support */}
                    <Links
                        title={'Support'}
                        linksArray={[new Link('FAQs'),
                        new Link('Contact us')]} />
                </div>
            </Container>

            <Container>
                <div>
                    <hr className='border-gray-300' />
                    <div className=' flex sm:flex-row flex-row-reverse text-gray-500/90 justify-between items-center xl:h-24 lg:h-20 sm:h-16 h-20'>
                        {/* Copyrights */}
                        <span className='text-xs block tracking-wider'>© 2023 Developed By
                            <a className='hover:underline' href="https://github.com/ahmod001" target="_blank" rel="noopener noreferrer"> Hasan
                            </a>
                        </span>

                        <div className='sm:flex items-center sm:space-x-5 space-y-0.5'>
                            {/* Terms & Agreement */}
                            <a className='hover:underline whitespace-nowrap text-xs block tracking-wider'
                                href="/">
                                Terms & Agreement
                            </a>

                            {/* Privacy Policy */}
                            <a className='hover:underline whitespace-nowrap text-xs block tracking-wider'
                                href="/">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

// This Sub_Component for footer links
const Links = ({ title, linksArray }) => (
    < div className='col xl:space-y-5 space-y-3'>
        {/* Title */}
        <h3 className='xl:text-xl sm:text-lg text-base font-semibold tracking-wider'>{title}</h3>

        {/* Links */}
        <div className='sm:space-y-2 text-gray-500 space-y-1.5'>
            {
                linksArray.map((link, i) => (
                    <Link key={i}
                        className='block xl:text-base text-sm hover:text-gray-900'
                        href={link.href || '#'}>
                        {link.name}
                    </Link>
                ))
            }
        </div>
    </div >
)
export default Footer;