"use client"
import { Error, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Container, Fade, IconButton, InputAdornment, TextField } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoginError, setIsLoginError] = useState(false);
    const router = useRouter();

    // Login handler
    const logInHandler = async (data) => {
        const res = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false
        })

        if (!res.error) {
            router.push('/')
            setIsLoginError(false)
        } else {
            setIsLoginError(true)
        }
    }

    return (
        <section className='h-screen animate bg-cover bg-no-repeat' style={{ backgroundImage: `url(/hero_bg.png)` }}>
            <Container sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <div className='flex items-center max-w-[26rem] backdrop-filter backdrop-blur-lg px-5 py-10 bg-white rounded-md p-4 min-h-[21rem]'>
                    <div className='space-y-8'>
                        {/* Form Title */}
                        <h3 className='text-center font-semibold text-gray-800 text-2xl'>
                            Join us
                        </h3>
                        <form onSubmit={handleSubmit(logInHandler)}
                            className='space-y-9' action="login" method="post">
                            <div className='space-y-5'>
                                {/* Email */}
                                <TextField
                                    defaultValue={'john@gmail.com'}
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    label='Email'
                                    size='small'
                                    error={errors.email ? true : false}
                                    helperText={errors.email ? errors.email.message : ''}
                                    fullWidth
                                    color='primary'
                                    variant='standard'
                                />

                                {/* Password */}
                                <TextField
                                    defaultValue={'John1234'}
                                    {...register('password', {
                                        required: 'Password is required',
                                        pattern: {
                                            value: /^(?=.*[A-Z])[a-zA-Z0-9]{6,}$/,
                                            message: 'Minimum 6 characters with one uppercase letter',
                                        },
                                    })}
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    fullWidth
                                    size="small"
                                    error={errors.password ? true : false}
                                    helperText={errors.password ? errors.password.message : ''}
                                    color="primary"
                                    variant="standard"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    size='small'
                                                    onClick={() => setShowPassword(!showPassword)}>
                                                    {showPassword ?
                                                        <VisibilityOff fontSize='inherit' />
                                                        : <Visibility fontSize='inherit' />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                {/* Login error */}
                                {isLoginError && (
                                    <Fade in={isLoginError}>
                                        <p className=' inline-block text-red-600 text-sm'>
                                            <Error fontSize='inherit' /> User was not found
                                        </p>
                                    </Fade>)}
                            </div>

                            {/* Submit-btn */}
                            <Box bgcolor={'#3F86FA'} sx={{ borderRadius: 1 }}>
                                <Button
                                    sx={{ textTransform: 'capitalize' }}
                                    type='submit'
                                    fullWidth
                                    color='primary'
                                    variant='contained'>
                                    Log in
                                </Button>
                            </Box>
                        </form>
                    </div>
                </div>
            </Container >
        </section >
    );
};

export default LogIn;