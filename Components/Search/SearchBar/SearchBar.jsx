"use client"
import { Apartment, Home, House, LocationOn, MonetizationOn, Search } from '@mui/icons-material';
import { Box, Button, Container, FormControl, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SearchBar = () => {
    const [propertyType, setPropertyType] = useState('house');
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Search Handler 
    const handleSearch = data => {
        console.log({...data, property:propertyType});
    }
    return (
        <div>
            {/* Set Property type */}
            <PropertyToggle props={[propertyType, setPropertyType]} />

            <div className='bg-white flex items-center shadow-md w-full lg:h-32 h-52'>
                <Container>
                    <form onSubmit={handleSubmit(handleSearch)}
                        className='grid lg:grid-cols-4  grid-cols-2 gap-7' action="search" method="post">
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

                        {/*Set Type */}
                        <SelectPrompt props={{
                            register: register,
                            label: 'Type',
                            iconComponent: propertyType === 'house' ?
                                <House fontSize='small' color='primary' /> :
                                <Apartment fontSize='small' color='primary' />,
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
                                    sx={{ textTransform: 'capitalize', py:{xs:1.5, sm:2} }}
                                    fullWidth
                                    startIcon={<Search />}
                                    variant='contained'>
                                    Search
                                </Button>
                            </Box>
                        </div>
                    </form>
                </Container>
            </div>
        </div>
    );
};

// Set Home/Apartment 
const PropertyToggle = ({ props: [propertyType, setPropertyType] }) => {

    // Handle Property
    const handleProperty = type => {
        setPropertyType(type)
    }
    return (
        <div className='flex'>
            {/* Home */}
            <Box bgcolor={propertyType === 'house' ? 'white' : 'transparent'}>
                <Button
                    onClick={() => handleProperty('house')}
                    startIcon={<Home color='primary' />}
                    sx={{ textTransform: 'capitalize', px: 2.5, py: 1.3, borderRadius: 0 }}
                    color='secondary'>
                    House
                </Button>
            </Box>
            {/* Apartment */}
            <Box bgcolor={propertyType === 'apartment' ? 'white' : 'transparent'}>
                <Button
                    onClick={() => handleProperty('apartment')}
                    startIcon={<Apartment color='primary' />}
                    sx={{ textTransform: 'capitalize', px: 2.5, py: 1.3, borderRadius: 0 }}
                    color='secondary'>
                    Apartment
                </Button>
            </Box>
        </div>
    )
}

// Select Prompt 
const SelectPrompt = ({ props: { register, label, iconComponent, options, defaultValue } }) => {
    return (
        <div className='col lg:space-y-3.5 space-y-2.5'>
            {/* Label */}
            <label className='text-gray-500 text-sm'>
                {label}
            </label>
            <div className='flex space-x-3 items-center'>
                {/* Icon */}
                {iconComponent}

                {/* Select */}
                <FormControl
                    {...register(label.toLowerCase())}
                    variant="standard"
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