"use client"
import { Bathtub, Email, Hotel, LocationOn, Phone, SquareFoot } from '@mui/icons-material';
import { Avatar, Container } from '@mui/material';
import Image from 'next/image';
import React, { Suspense } from 'react';
import ScheduleTour from '../ScheduleTour/ScheduleTour';
import { useRouter } from 'next/navigation';
import { mainPlaceholderImgData } from '@/store/propertiesData';

const PropertyDetails = ({ agent, property }) => {

    const { id, title, description, location, img, price: { string }, bedrooms, bathrooms, roomSize } = property;

    const router = useRouter()
    !property && router.push('/')
    return (
        <Container>
            <div className='space-y-8'>
                <header className='grid md:grid-cols-2 grid-cols-1  gap-y-2.5'>
                    <div className='md:space-y-2 space-y-1.5'>
                        {/* Title */}
                        <h1 className='lg:text-3xl sm:text-2xl text-xl font-medium tracking-wide'>
                            {title}
                        </h1>

                        {/* Location */}
                        <h3 className='text-blue-500 md:text-base text-sm'>
                            <LocationOn fontSize='inherit' className='mb-0.5' /> {location}
                        </h3>
                    </div>
                    {/* Price */}
                    <h1 className='lg:text-2xl md:text-xl text-gray-800 text-lg md:text-end text-start font-medium tracking-wide'>
                        Price:  {string}$
                    </h1>
                </header>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                    {/* Image of property */}
                    <div className='h-full flex items-center'>
                        <div className='w-full relative md:max-w-none sm:max-w-[37rem] mx-auto h-[22rem] lg:h-[27.5rem] md:h-[22rem] sm:h-[25.5rem]'>
                            <Image fill
                                priority={true}
                                alt={title}
                                className='rounded-sm'
                                placeholder='blur'
                                blurDataURL={mainPlaceholderImgData}
                                src={img}
                                sizes='100vh' />
                        </div>
                    </div>

                    <Container >
                        <div className=' space-y-8'>
                            {/* Agents details */}
                            <Suspense fallback={<h1>loading....</h1>}>
                                <AgentDetailsCard agent={agent} />
                            </Suspense>

                            {/* Features */}
                            <div className='lg:space-y-5 space-y-4'>
                                <h2 className='lg:text-xl text-lg font-semibold'>
                                    Features
                                </h2>
                                <hr />

                                <ul className='space-y-2'>
                                    {[
                                        {
                                            icon: <Hotel fontSize='inherit' />,
                                            title: 'Bed room',
                                            count: bedrooms
                                        },
                                        {
                                            icon: <Bathtub fontSize='inherit' />,
                                            title: 'Bath room',
                                            count: bathrooms,
                                        },
                                        {
                                            icon: <SquareFoot fontSize='inherit' />,
                                            title: 'Room size',
                                            count: roomSize
                                        }
                                    ].map((item, i) => (
                                        <li className='flex items-center text-gray-600 space-x-4'
                                            key={i}>
                                            <div className='flex items-center space-x-1'>
                                                {/* Icon */}
                                                {item.icon}
                                                {/* Title */}
                                                <p className='py-0 my-0'>
                                                    {item.title} :
                                                </p>
                                            </div>

                                            {/* Count */}
                                            <p>{item.count}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-y-4 gap-x-6'>
                    <div className=''>
                        <div className='space-y-2'>
                            {/* Title */}
                            <h2 className='lg:text-xl text-lg font-semibold'>
                                Description
                            </h2>

                            {/* Description */}
                            <article className='text-justify  text-gray-600'>
                                {description}
                            </article>
                        </div>
                    </div>

                    {/* Request inquiry */}
                    <ScheduleTour />
                </div>
            </div>
        </Container>
    );
};

// Agent Details
const AgentDetailsCard = (
    { agent: { picture: { large },
        name: { first, last },
        location: { street: { name, number }, state },
        phone, email } }) => {

    return (
        <div className='lg:space-y-6 space-y-4 w-full '>
            {/* Title */}
            <h2 className='lg:text-xl text-lg font-semibold'>
                Agent Information
            </h2>
            <hr />
            <div className='flex items-center space-x-4'>
                {/* img */}
                <Avatar
                    sx={{ width: { xs: '3.3rem', sm: '4rem', md: '3.3rem', lg: '4rem' }, height: { xs: '3.3rem', sm: '4rem', md: '3.3rem', lg: '4rem' } }}
                    src={large} />

                <div>
                    {/* Name */}
                    <h2 className='font-medium lg:text-lg sm:text-lg md:text-base text-base'>
                        {first + ' ' + last}
                    </h2>
                    <p className='m-0 text-sm text-gray-500'>
                        Agent of Property
                    </p>
                </div>
            </div>
            {[
                {
                    icon: <LocationOn color='primary' fontSize='small' />,
                    title: `${number} ${name}, ${state}`
                },
                {
                    icon: <Phone color='primary' fontSize='small' />,
                    title: phone
                },
                {
                    icon: <Email color='primary' fontSize='small' />,
                    title: email
                }
            ].map((item, i) => (
                <div key={i} className='flex items-center space-x-2'>
                    {item.icon}
                    <p className=' text-gray-600'>
                        {item.title}
                    </p>
                </div>
            ))}
        </div>
    )
}


export default PropertyDetails;