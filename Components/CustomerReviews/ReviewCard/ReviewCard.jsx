import { mainPlaceholderImgData } from '@/store/propertiesData';
import Image from 'next/image';
import React from 'react';

const ReviewCard = async ({ user }) => {
    const { name, picture, location: { country } } = user;

    return (
        <div className='mx-auto cursor-pointer reviewCard px-6 md:px-6 sm:px-4 py-4 md:space-y-3 sm:space-y-2.5 space-y-3.5 max-w-[33rem]'>
            <div className='grid grid-cols-5 gap-x-3.5 sm:gap-x-5 md:gap-x-3.5 lg:gap-x-6'>
                {/* Customer Img */}
                <div className='relative items-center col-span-2 w-full h-36 sm:h-40 md:h-36 lg:h-40 xl:h-[11rem]'>
                    <Image fill
                        loading='lazy'
                        placeholder='blur'
                        blurDataURL={mainPlaceholderImgData}
                        sizes='100vh'
                        src={picture.large}
                        alt={name.first} />
                </div>
                <div className='flex items-end col-span-3'>
                    <div className='xl:space-y-4 w-full lg:space-y-3.5 md:space-y-2 sm:space-y-3 space-y-1'>
                        {/* Name */}
                        <h3 className='font-semibold tracking-wide whitespace-nowrap lg:text-2xl md:text-base sm:text-xl text-lg text-gray-800'>
                            {(name.first + ' ' + name.last).substring(0,14)}
                        </h3>

                        <div className='lg:space-y-3 sm:space-y-2 md:space-y-1.5 space-y-1.5'>
                            {/* Description */}
                            <p className='sm:text-sm text-xs text-gray-500 md:text-xs lg:text-sm md:text-justify lg:text-start  tracking-normal'>We were impressed with The Real Estate's approach, avoiding open inspections and auctions effectively.
                            </p>

                            {/* Title */}
                            <span className='text-xs text-blue-500 block font-medium'>
                                {country}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;