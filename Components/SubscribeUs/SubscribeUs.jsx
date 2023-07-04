"use client"
import { Box, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SnackBar from '../Snackbar/SnackBar';

const SubscribeUs = () => {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const [isSubscribed, setIsSubscribed] = useState(false);

    // Subscribe Handler
    const handleSubscribe = (email) => {
        sessionStorage.setItem('realhome_subcription', JSON.stringify(email));
        setIsSubscribed(!isSubscribed)
    }
    return (
        <>
            {/* Show popup massage after get subscribed*/}
            <SnackBar props={{ open:isSubscribed, 
                handleClose:()=>setIsSubscribed(!isSubscribed),
                massage:'Subscribed Successfully' }} />
            <Container>
                <div style={{
                    backgroundImage: `url(${'/subscribe_realhome_bg.png'})`,
                    backgroundSize: 'cover'
                }} className='lg:h-96 sm:h-[19rem] rounded-sm h-[18.5rem] flex justify-center px-6 items-center text-center'>
                    <div className='lg:space-y-12 sm:space-y-9 space-y-8'>
                        <div className='lg:space-y-4 space-y-3'>
                            {/* title */}
                            <h1 className='lg:text-4xl md:text-2xl sm:text-2xl text-xl font-semibold tracking-wide'>
                                Get Started With Realhome
                            </h1>
                            {/* description */}
                            <p className='lg:text-base text-gray-500 sm:text-sm text-xs '>
                                Subscribe and find super attractive price quotes from us for free, find your residence soon
                            </p>
                        </div>

                        {/* Enter Email */}
                        <form className='flex justify-center items-center' onSubmit={handleSubmit(handleSubscribe)} method="post">
                            <TextField
                                size="small"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                label="Email"
                                variant="outlined"
                                color="primary"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderTopRightRadius: '0px',
                                            borderBottomRightRadius: '0px',
                                        },
                                    },
                                }}
                                defaultValue="hasan@gmail.com"
                                error={Boolean(errors.email)}
                                helperText={errors.email?.message} />

                            {/* Subscribe btn */}
                            <Box sx={{ width: 'fit-content', height: 'fit-content', bgcolor: '#3F86FA', borderRadius: '0 6px 6px 0' }}>
                                <Button
                                    type='submit'
                                    sx={{ textTransform: 'capitalize', py: 0.97, borderRadius: '0 6px 6px 0' }}
                                    variant='contained'
                                    color='primary'>
                                    Subscribe
                                </Button>
                            </Box>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SubscribeUs;