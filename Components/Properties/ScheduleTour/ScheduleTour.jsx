"use client"
import SnackBar from '@/Components/Snackbar/SnackBar';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ScheduleTour = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    // Request for inquiry Handler
    const handleRequest = (data) => {
        sessionStorage.setItem('real_home_Schedule_tour', JSON.stringify(data))
        reset();
        setIsFormSubmitted(!isFormSubmitted)
    }

    return (
        <div className='px-4 space-y-3'>
            {/* Show pop-up after successfully form submitted */}
            <SnackBar props={{
                open: isFormSubmitted,
                handleClose: () => setIsFormSubmitted(!setIsFormSubmitted),
                massage: 'Schedule tour is successfully sent.'
            }} />


            {/* Title */}
            <h2 className='lg:text-xl text-lg font-semibold'>
                Schedule tour
            </h2>

            <form onSubmit={handleSubmit(handleRequest)}
                className='space-y-7'
                method="post">
                <div className='space-y-2.5'>
                    {[{ id: 0, label: 'Name' },
                    { id: 1, label: 'Phone' },
                    { id: 2, label: 'Email' }
                    ].map(field => (
                        <TextField
                            key={field.id}
                            size='small'
                            label={field.label + '*'}
                            {...register(field.label.toLowerCase(), {
                                required: `${field.label} is required`,
                                pattern: field.label.toLowerCase() === 'email' ? {
                                    value: /^\S+@\S+\.(com)$/i,
                                    message: 'Invalid email address'
                                } : {}

                            })}
                            inputProps={field.label.toLowerCase() === 'phone' ? {
                                type: 'number',
                            } : {}}
                            error={Boolean(errors[field.label.toLowerCase()])}
                            helperText={errors[field.label.toLowerCase()]?.message}
                            variant='standard'
                            fullWidth />
                    ))}
                    {/* Massage */}
                    <TextField
                        multiline
                        rows={3}
                        size='small'
                        label={'Massage'}
                        {...register('massage')}
                        variant='standard'
                        fullWidth
                    />
                </div>
                {/* Submit request btn */}
                <Button
                    sx={{ textTransform: 'capitalize' }}
                    fullWidth
                    variant='outlined'
                    type="submit">
                    Submit request
                </Button>
            </form>
        </div>
    );
};

export default ScheduleTour;