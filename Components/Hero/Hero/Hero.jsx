'use client'
import SearchBar from '@/Components/Search/SearchBar/SearchBar';
import { Add } from '@mui/icons-material';
import { Container, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    // Media Query
    const isMediumScreen = useMediaQuery('(max-width: 1024px)');
    return (
        <section style={{ backgroundImage: `url(${'/hero_bg.png'})`, backgroundSize: 'cover' }} className=' pt-20'>
            <Container>
                <div className='sm:grid sm:grid-cols-5 lg:grid-cols-2 flex flex-col gap-5'>
                    <div className='col-span-1 sm:col-span-3 lg:col-span-1 pt-3.5 flex items-center'>
                        <div className='xl:space-y-8 lg:space-y-7 space-y-5'>
                            {/* title */}
                            <h1 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold tracking-wide'>
                                Discover your dream <br /> realestate home
                            </h1>
                            {/* description */}
                            <p className='lg:text-base text-gray-500 md:text-sm sm:text-xs text-sm'>
                                The place is to find a house with guaranteed quality and get the best price we offer, I guarantee you will be interested.
                            </p>

                            {/* Numbers of project we have done */}
                            <div className='grid grid-cols-3 gap-x-5'>
                                {[
                                    { title: 'Happy Customers', count: '19,985' },
                                    { title: 'Completed House', count: '13,325' },
                                    { title: 'House Rent', count: '10,213' }
                                ].map((card, i) => (
                                    <div key={i}
                                        className='lg:space-y-1.5 space-y-1 font-semibold'>
                                        {/* Number of projects */}
                                        <h1 className='xl:text-3xl flex items-center lg:text-2xl text-xl'>
                                            {card.count}<Add
                                                fontSize='inherit'
                                                color='primary' />
                                        </h1>
                                        {/* Title */}
                                        <p className='xl:text-base whitespace-nowrap text-gray-500 font-normal lg:text-sm p-0 text-xs'>
                                            {card.title}
                                        </p>
                                    </div>
                                ))

                                }
                            </div>
                        </div>
                    </div>

                    {/* Hero Img */}
                    <div className='col-span-1 sm:col-span-2  lg:col-span-1 justify-center flex items-baseline'>
                        <div className='lg:h-[32rem] lg:w-[28rem] md:h-[24.5rem] sm:h-[20rem] h-[18rem] w-7/12 sm:w-full relative'>
                            <Image
                                src='/hero_building.png'
                                fill
                                quality={100}
                                placeholder='empty'
                                priority={true}
                                unoptimized={true}
                                alt="Sky Scraper" />
                        </div>
                    </div>
                </div>

                {/* SearchBar */}
                <SearchBar/>
            </Container>
        </section>

    );
};

export default Hero;