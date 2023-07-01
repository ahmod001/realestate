"use client"
import { apartmentsData, housesData } from '@/store/propertiesData';
import { Container } from '@mui/material';
import React from 'react';
import PropertyCard from './PropertyCard/PropertyCard';

const Properties = () => {
    return (
        <Container>
            <div className='lg:space-y-7 space-y-5'>
                {/* title */}
                <h1 className='lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide'>
                Discover the Perfect <br />Property for You
                </h1>
                {/* Properties Card */}
                <div className='grid xl:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-5 sm:grid-cols-2 grid-cols-1'>
                    {[...apartmentsData, ...housesData].map(apartment => (
                        <PropertyCard key={apartment.id} property={apartment} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Properties;