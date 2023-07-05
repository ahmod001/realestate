"use client"
import { mainPlaceholderImgData } from '@/store/propertiesData';
import { Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const OurFeatures = () => {
    return (
        <Container>
            <section className='grid sm:grid-cols-2 gap-y-4 grid-cols-1'>
                {/* Image */}
                <div className='flex items-center sm:justify-start justify-center'>
                    <div className='relative sm:w-11/12 w-full sm:max-w-none max-w-[21rem] h-[18.5rem] sm:h-[21rem] xl:h-[32rem] md:h-[24rem] lg:h-[29rem]'>
                        <Image fill
                            sizes='100vh'
                            priority={true}
                            placeholder='blur'
                            blurDataURL={mainPlaceholderImgData}
                            alt='features'
                            src={'/features_we_provide_building.png'} />
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='lg:space-y-7 space-y-5'>
                        {/* title */}
                        <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold tracking-wide'>
                            Features We Provide
                        </h1>
                        {/* description */}
                        <p className='lg:text-base text-gray-500 text-sm '>
                            We always strive to provide premium services at affordable price for customer satisfaction.
                        </p>
                        {/* Features List */}
                        <Features />
                    </div>
                </div>
            </section >
        </Container>
    );
};

// List of Features 
const Features = () => {
    const features = [{ icon: '/price-tag 1.png', title: 'Affordable prices', description: 'The house we provide has a fairly affordable price and guaranteed quality' },
    { icon: '/best-price 2.png', title: 'Easy payment', description: 'The payment we apply is also easy,we provide various kinds of online wallets' },
    { icon: '/insurance 3.png', title: 'Property insurance', description: 'Insurance is also guaranteed safe, if there is something that is hampered then we are willing to be responsible' }]

    return (
        <div className='lg:space-y-7 space-y-4'>
            {features.map((feature, i) => (
                <div key={i} className='flex lg:space-x-5 space-x-5'>
                    {/* Icon */}
                    <img
                        src={`/icons/features_we_provide${feature.icon}`}
                        className='lg:h-7 h-6 lg:mt-0 mt-1'
                        alt={feature.title} />

                    <div className='lg:space-y-2 space-y-1'>
                        {/* title */}
                        <h3 className='lg:text-xl md:text-lg text-base font-semibold tracking-wide'>
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <article className='lg:text-sm text-gray-500 text-xs '>
                            {feature.description}
                        </article>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default OurFeatures;