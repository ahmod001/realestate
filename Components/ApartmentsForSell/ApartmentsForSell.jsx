"use client"
import { Container } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Keyboard, Navigation } from "swiper";
import "swiper/css"
import "swiper/css/pagination"
import PropertyCard from '../Properties/PropertyCard/PropertyCard';
import { apartmentsData } from '@/store/propertiesData';

const ApartmentsForSell = () => {
    return (
        <Container>
            <div className='lg:space-y-7 space-y-5'>
                {/* title */}
                <h1 className='lg:text-3xl text-2xl font-semibold tracking-wide'>
                    Our Apartment  <br /> For selling
                </h1>

                <Swiper
                    breakpoints={
                        {// Extra_Small Screen
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
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
                    className="mySwiper lg:h-[28rem] sm:h-[26.5rem] h-[26rem]">
                    {apartmentsData.map(apartment => (
                        <SwiperSlide className='p-1' key={apartment.id}>
                            <PropertyCard property={apartment} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
};

export default ApartmentsForSell;