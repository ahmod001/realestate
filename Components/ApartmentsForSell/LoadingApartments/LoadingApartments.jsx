"use client"
import { Container, Skeleton } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Keyboard, Navigation } from "swiper";
import "swiper/css"
import "swiper/css/pagination"
import LoadingProperty from '@/Components/Properties/LoadingProperty/LoadingProperty';

const LoadingApartments = () => {
    return (
        <Container>
            <Swiper
                breakpoints={
                    {
                        // Extra_Small Screen
                        0: {
                            slidesPerView: 1,
                        },
                        // Medium Screen
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        // Large Screen
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        }
                    }
                }
                speed={700}
                modules={[Keyboard, Pagination, Navigation]}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper lg:h-[28rem] h-[26rem]">
                {Array.from({ length: 4 }).map((apartment, i) => (
                    <SwiperSlide className='p-1' key={i}>
                        <LoadingProperty />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default LoadingApartments;