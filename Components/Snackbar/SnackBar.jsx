"use client"
import { DoneAll } from '@mui/icons-material';
import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const SnackBar = ({ props: { handleClose, open, massage } }) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
                icon={<DoneAll fontSize='inherit' />}
                onClose={handleClose}
                severity="info"
                sx={{ width: '100%' }}>
                {massage}
            </Alert>
        </Snackbar>
    );
};

export default SnackBar;