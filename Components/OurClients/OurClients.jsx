"use client"
import { Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const OurClients = () => {
    return (
        <div className='flex items-center justify-center lg:py-5 sm:py-3 py-1 w-full'>
            <Container disableGutters>
                <div className='grid md:grid-cols-6 lg:gap-0 gap-y-6 grid-cols-3'>
                    {['brand_1.png', 'brand_2.png', 'brand_3.png', 'brand_4.png', 'brand_5.png', 'brand_6.png'].map((brand, i) => (
                        <div key={i} className='flex justify-center items-center'>
                            <div className='relative xl:h-11 xl:w-5/12 md:h-8 md:w-5/12 sm:h-8 sm:w-4/12 h-7 w-4/12 lg:h-10'>
                                <Image fill
                                    sizes='100vh'
                                    priority={true}
                                    alt='brand'
                                    src={`/client_brands/${brand}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default OurClients;