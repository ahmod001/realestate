"use client"
import { Container } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, FreeMode } from "swiper";
import "swiper/css"
import "swiper/css/pagination"
import ReviewCard from './ReviewCard/ReviewCard';

SwiperCore.use([Pagination, Autoplay]);

const CustomerReviews = async ({ users }) => {
    const getUsers = await users;
    return (
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
                    {getUsers.map((user, i) => (
                        <SwiperSlide key={i}>
                            <ReviewCard user={user} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
};

export default CustomerReviews;