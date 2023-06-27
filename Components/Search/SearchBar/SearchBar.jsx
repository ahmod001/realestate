"use client"
import { Apartment, Home, House, LocationOn, MonetizationOn, Search } from '@mui/icons-material';
import { Box, Button, Container, FormControl, MenuItem, Select, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SearchBar = () => {
    const [propertyType, setPropertyType] = useState('house');
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Search Handler 
    const handleSearch = data => {
        console.log({ ...data, property: propertyType });
    }
    return (
        <div className='relative xl:bottom-11 lg:bottom-[2.64rem] bottom-10'>
            <Container>
                {/* Set Property type */}
                <PropertyToggle props={[propertyType, setPropertyType]} />

                <div className='bg-white flex items-center lg:shadow-lg shadow-sm w-full lg:h-32 h-[11.5rem]'>
                    <Container>
                        <form onSubmit={handleSubmit(handleSearch)}
                            className='grid lg:grid-cols-4 grid-cols-2 gap-y-5 gap-x-7' action="search" method="post">
                            {/*Set LOCATION */}
                            <SelectPrompt props={{
                                register: register,
                                label: 'Location',
                                iconComponent: <LocationOn fontSize='small' color='primary' />,
                                options: [{ item: 'New York, USA', value: 'New York,USA' },
                                { item: 'London, UK', value: 'London,UK' },
                                { item: 'Dhaka, Bangladesh', value: 'Dhaka,Bangladesh' }],
                                defaultValue: 'Dhaka,Bangladesh'
                            }} />

                            {/*Set TYPE */}
                            <SelectPrompt props={{
                                register: register,
                                label: 'Type',
                                iconComponent: <House fontSize='small' color='primary' />,
                                options: [{ item: 'Minimalistic', value: 'minimalistic' },
                                { item: 'Victorian ', value: 'victorian ' }],
                                defaultValue: 'minimalistic'
                            }} />

                            {/*Set Price Range */}
                            <SelectPrompt props={{
                                register: register,
                                label: 'Price',
                                iconComponent: <MonetizationOn
                                    fontSize='small' color='primary' />,
                                options: [{ item: '20,000 - 50,000', value: '20000-50000' },
                                { item: '50,000 - 100,000', value: '50000-100000' },
                                { item: '100,000 - 200,000+', value: '100000-200,000' }],
                                defaultValue: '20000-50000'
                            }} />

                            {/* Search */}
                            <div className='flex col justify-center  items-end '>
                                <Box sx={{ maxWidth: '14rem', width: '100%' }}
                                    bgcolor={'#3F86FA'}>
                                    <Button
                                        type='submit'
                                        color='primary'
                                        size='large'
                                        sx={{ textTransform: 'capitalize', py: { xs: 1.2, sm: 1.5 } }}
                                        fullWidth
                                        startIcon={<Search fontSize='inherit'/>}
                                        variant='contained'>
                                        Search
                                    </Button>
                                </Box>
                            </div>
                        </form>
                    </Container>
                </div>
            </Container>
        </div>
    );
};

// Set Home/Apartment 
const PropertyToggle = ({ props: [propertyType, setPropertyType] }) => {

    // Media Query 
    const isMediumScreen = useMediaQuery('(max-width:1280px)')
    const isExtraSmallScreen = useMediaQuery('(max-width:1280px)')

    // Handle Property
    const handleProperty = type => {
        setPropertyType(type)
    }
    return (
        <div className='flex'>
            {/* Home */}
            <Box sx={{ transition: 'all 140ms ease-in-out' }}
                bgcolor={propertyType === 'house' ? 'white' : 'transparent'}>
                <Button
                    onClick={() => handleProperty('house')}
                    startIcon={<Home color={propertyType === 'house' ? 'primary' : 'secondary'} />}
                    sx={{ textTransform: 'capitalize', px: 2.5, py: 1.2, borderRadius: 0 }}
                    size={isMediumScreen ? 'small' : 'normal'}
                    color='secondary'>
                    House
                </Button>
            </Box>
            {/* Apartment */}
            <Box sx={{ transition: 'all 140ms ease-in-out' }}
                bgcolor={propertyType === 'apartment' ? 'white' : 'transparent'}>
                <Button
                    onClick={() => handleProperty('apartment')}
                    startIcon={<Apartment color={propertyType === 'apartment' ? 'primary' : 'secondary'} />}
                    sx={{ textTransform: 'capitalize', px: 2.5, py: 1.2, borderRadius: 0 }}
                    size={isMediumScreen ? 'small' : 'normal'}
                    color='secondary'>
                    Apartment
                </Button>
            </Box>
        </div>
    )
}

// Select Prompt 
const SelectPrompt = ({ props:
    { register, label, iconComponent, options, defaultValue } }) => {

    // Media Query 
    const isMediumScreen = useMediaQuery('(max-width:1280px)')
    return (
        <div className='col lg:space-y-3.5 space-y-2.5'>
            {/* Label */}
            <label className='text-gray-500 text-sm'>
                {label}
            </label>
            <div className='flex lg:space-x-3 space-x-2.5 items-center'>
                {/* Icon */}
                {iconComponent}
                
                {/* Select */}
                <FormControl
                    {...register(label.toLowerCase())}
                    variant="standard"
                    size={isMediumScreen ? 'small' : 'medium'}
                    fullWidth>
                    <Select
                        defaultValue={defaultValue}
                        label={label}>
                        {options.map((item, i) => (
                            <MenuItem key={i}
                                value={item.value}>
                                {item.item}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}
export default SearchBar;