'use client'
import SearchBar from '@/Components/Search/SearchBar/SearchBar';
import { mainPlaceholderImgData } from '@/store/propertiesData';
import { Add } from '@mui/icons-material';
import { Container, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <section>
            <section style={{ backgroundImage: `url(${'/hero_bg.png'})`, backgroundSize: 'cover' }} className='pt-20'>
                <Container>
                    <div className='sm:grid order-last md:grid-cols-2 sm:grid-cols-5 flex flex-col gap-5'>
                        <div className='col-span-1 md:col-span-1 sm:col-span-3 pt-3.5 flex md:items-center items-top'>
                            <div className='xl:space-y-8 lg:space-y-7 space-y-4'>
                                {/* title */}
                                <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold tracking-wide'>
                                    Discover your dream <br /> realestate home
                                </h1>
                                {/* description */}
                                <p className='lg:text-base text-gray-500 text-xs '>
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
                                            className='lg:space-y-1.5 md:space-y-1 space-y-0.5 font-semibold'>
                                            {/* Number of projects */}
                                            <h1 className='xl:text-3xl flex items-center lg:text-2xl text-lg'>
                                                {card.count}<Add
                                                    fontSize='inherit'
                                                    color='primary' />
                                            </h1>
                                            {/* Title */}
                                            <p className='xl:text-base whitespace-nowrap text-gray-500 font-normal lg:text-sm p-0 text-xs'>
                                                {card.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Hero Img */}
                        <div className='col-span-1 sm:col-span-2 md:col-span-1 justify-end flex items-center'>
                            <div className='xl:h-[32rem] xl:w-[30rem] lg:h-[30rem] lg:w-[28rem] md:w-[24rem] md:h-[25rem] sm:h-[18rem] sm:w-full h-[16rem]  w-[14rem] relative'>
                                <Image fill
                                    src='/hero_building.png'
                                    sizes='100vh'
                                    blurDataURL={mainPlaceholderImgData}
                                    priority={true}
                                    alt="Sky Scraper" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Search Property */}
            <SearchBar />
        </section>

    );
};

export default Hero;