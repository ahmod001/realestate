"use client"
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Button, CardActions } from '@mui/material';
import Image from 'next/image';
import { Bathtub, Hotel, SquareFoot } from '@mui/icons-material';

const PropertyCard = ({ property: { id, location, img, price, bedrooms, bathrooms, roomSize } }) => {
    return (
        <div className='flex justify-center'>
            <Card sx={{ maxWidth: 330, width: '100%' }}>
                    {/* Image */ }
                    <div className='relative w-full lg:h-[16.5rem] h-[15rem]'>
                        <Image
                            fill
                            sizes={'100vh'}
                            className='bg-cover bg-top'
                            alt='apartment'
                            loading='lazy'
                            placeholder='empty'
                            src={img} />
                    </div>
                    <CardContent>
                        <div className='space-y-3.5'>
                            {/* Price */}
                            <h5 className='text-blue-500 font-semibold text-xl'>$ {price.string}</h5>

                            {/* Address */}
                            <p className='lg:text-base m-0 text-gray-800 text-sm'>
                                {location}
                            </p>

                            {/* Features */}
                            <div className='grid grid-cols-3'>
                                {/* Number of Bed Room */}
                                <div className='flex items-center text-sm text-gray-500 space-x-1.5'>
                                    {/* Icon*/}
                                    <Hotel fontSize='inherit' />

                                    {/* Title */}
                                    <h3>
                                        {bedrooms}Bd R
                                    </h3>
                                </div>

                                {/* Number of Bath Room */}
                                <div className='flex text-sm items-center text-gray-500 space-x-1.5'>
                                    {/* Icon*/}
                                    <Bathtub fontSize='inherit' />
                                    {/* Title */}
                                    <h3>
                                        {bathrooms}Bat R
                                    </h3>
                                </div>

                                {/* Room Size */}
                                <div className='flex text-sm items-center text-gray-500 space-x-0.5'>
                                    {/* Icon*/}
                                    <SquareFoot fontSize='inherit' />
                                    {/* Title */}
                                    <h3>
                                        {roomSize}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                <CardActions>
                    {/* Book Now Btn */}
                    <Box sx={{ width: '100%', bgcolor: '#3F86FA' }}>
                        <Button
                            size="small"
                            fullWidth
                            sx={{ textTransform: 'capitalize' }}
                            variant='contained'
                            color="primary">
                            Book Now
                        </Button>
                    </Box>
                </CardActions>
            </Card>

        </div>
    );
};

export default PropertyCard;