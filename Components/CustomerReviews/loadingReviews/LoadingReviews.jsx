"use client"
import React from 'react';
import { Container, Skeleton } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, FreeMode } from "swiper";
import "swiper/css"
import "swiper/css/pagination"

SwiperCore.use([Pagination, Autoplay]);

const LoadingReviews = () => (
    <Container>
        <div className='lg:space-y-8 space-y-5'>
            {/* title */}
            <h1 className='lg:text-3xl sm:text-2xl text-xl font-semibold tracking-wide'>
                What Our Customer <br /> Say About Us
            </h1>

            <Swiper style={{ minHeight: '14rem' }}
                loop={true}
                centeredSlides={true}
                breakpoints={
                    {
                        // Extra_Small Screen
                        0: {
                            slidesPerView: 1,
                        },
                        // Medium Screen
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 1
                        },
                        // Large Screen
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }
                }
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                speed={700}
                modules={[Pagination, Autoplay, FreeMode]}
                freeMode={true}
                className="mySwiper">
                {Array.from({ length: 6 }).map((card, i) => (
                    <SwiperSlide key={i}>
                        <ReviewCardSkeleton />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </Container>
)

// Card Skeleton
const ReviewCardSkeleton = () => (
    <div className='mx-auto cursor-pointer px-6 md:px-6 sm:px-4 py-4 md:space-y-3 sm:space-y-2.5 space-y-3.5 w-full max-w-[33rem]'>
        <div className='grid grid-cols-5 gap-x-3.5 sm:gap-x-5 md:gap-x-3.5 lg:gap-x-6'>
            {/* Customer Img */}
            <div className='relative items-center col-span-2 w-full h-36 sm:h-40 md:h-36 lg:h-40 xl:h-[11rem]'>
                <Skeleton variant='rectangular' width='100%' height='100%' />
            </div>
            <div className='flex items-end  col-span-3'>
                <div className='xl:space-y-4 w-full lg:space-y-3.5 md:space-y-2 sm:space-y-3 space-y-1'>
                    {/* Name */}
                    <Skeleton animation='wave' variant='text' width={130} height={40} />

                    <div className='lg:space-y-3 sm:space-y-2 md:space-y-1.5 space-y-1.5'>
                        {/* Description */}
                        <div>
                            <Skeleton animation='wave' variant='text' width='90%' height={12} />
                            <Skeleton animation='wave' variant='text' width='85%' height={12} />
                            <Skeleton animation='wave' variant='text' width='90%' height={12} />
                            <Skeleton animation='wave' variant='text' width='75%' height={12} />
                            <Skeleton animation='wave' variant='text' width='40%' height={12} />
                        </div>

                        {/* Title */}
                        <Skeleton animation='wave' variant='text' width={80} height={18} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default LoadingReviews;
