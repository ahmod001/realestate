"use client"
import { mainPlaceholderImgData } from '@/store/propertiesData';
import { Box, Button, Container, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const DataSecurity = () => {
    const router = useRouter();

    // Media Query 
    const isExtraSmallScreen = useMediaQuery('(max-width:640px)');
    const isMediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
    return (
        <Container>
            <div className='grid gap-y-6 md:grid-cols-2 grid-cols-1'>
                <div className="flex items-center">
                    <div className='lg:space-y-6 sm:space-y-4 space-y-5'>
                        <div className='lg:space-y-5 md:space-y-3 space-y-3.5'>
                            {/* Title */}
                            <h1 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl text-xl text-gray-800 font-semibold ">
                                We Are Trusted Real Estate Agent
                            </h1>

                            {/* Description */}
                            <p className='lg:text-base text-gray-500 text-sm text-justify'>
                                Since the beginning we always present iconic and unique design for the project zone. We always ready to help by providing our best service.
                            </p>
                        </div>

                        {/* #Extra Security */}
                        <div className='space-y-3'>
                            {/* Title */}
                            <h3 className="lg:text-xl sm:text-lg text-gray-800 font-semibold sm:mb-2">
                                Extra Security
                            </h3>

                            {/* Details */}
                            <p className='lg:text-sm text-justify text-gray-600 text-xs '>
                                At our real estate agency, we provide customized security camera solutions to meet your specific requirements. From smartphone-connected cameras to advanced motion detection, night vision, and two-way communication, we offer a comprehensive range of options. Rest assured that our top-notch security camera systems will provide peace of mind and protect your property. Experience the pinnacle of surveillance technology and redefine your sense of security with us.
                            </p>
                        </div>

                        {/* Learn more btn */}
                        <Box bgcolor={'#3F86FA'} width={'fit-content'}>
                            <Button
                                onClick={() => router.push('/trust-and-security')}
                                color='primary'
                                variant='contained'
                                size={isExtraSmallScreen || isMediumScreen ? 'small' : 'medium'}
                                sx={{ textTransform: 'capitalize' }} >
                                Learn More
                            </Button>
                        </Box>
                    </div>
                </div>

                {/* Image */}
                <div className='flex order-first md:order-none md:items-end md:justify-end justify-center'>
                    <div className='relative sm:w-11/12 w-full md:max-w-none max-w-[21rem] h-[19rem] sm:h-[21rem] xl:h-[32rem] md:h-[21rem] lg:h-[29rem]'>
                        <Image fill
                        loading='lazy'
                            placeholder='blur'
                            alt='features'
                            sizes='100vh'
                            blurDataURL={mainPlaceholderImgData}
                            src={'/insurance_building.png'} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default DataSecurity;