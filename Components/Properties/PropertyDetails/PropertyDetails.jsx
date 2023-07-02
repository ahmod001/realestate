"use client"
import { Container } from '@mui/material';
import React from 'react';

const PropertyDetails = ({ property: { id, title, location, img, price, bedrooms, bathrooms, roomSize } }) => {
    return (
        <Container>
            <h1 className='text-center text-3xl'>
              {id} 
            </h1>
        </Container>
    );
};

export default PropertyDetails;