"use client"
import { Card, CardActionArea, CardContent, Skeleton } from '@mui/material';
import React from 'react';

const LoadingProperty = () => {
    return (
        <div className='flex justify-center'>
            <Card
                sx={{ maxWidth: 330, width: '100%' }}>
                {/* Image */}
                <div className='relative w-full lg:h-[16.5rem] h-[15rem]'>
                    <Skeleton
                        height={'100%'}
                        width={'100%'}
                        variant='rectangular' />
                </div>
                <CardContent>
                    <div className='space-y-3.5'>
                        <div className='space-y-2.5'>
                            {/* Price */}
                            <Skeleton
                                height={'2rem'}
                                width={'40%'}
                                variant='text' />
                        </div>

                        {/* Address */}
                        <Skeleton
                            height={'1rem'}
                            width={'70%'}
                            variant='text' />
                        {/* Features */}
                        <Skeleton variant='text'
                            height={'1.3rem'}
                            width={'100%'} />
                    </div>
                </CardContent>
            </Card>

        </div>
    );
};

export default LoadingProperty;