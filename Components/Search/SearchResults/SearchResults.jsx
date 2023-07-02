"use client"
import PropertyCard from '@/Components/Properties/PropertyCard/PropertyCard';
import { apartmentsData, housesData } from '@/store/propertiesData';
import { Container } from '@mui/material';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';

const SearchResults = ({ searchPrompt }) => {
    const { location, price, property, type } = searchPrompt;
    const [results, setResults] = useState([]);
console.log(results, searchPrompt);
    // This function will filter the results based the prompt
    const filterResults = array => {
        return (array.filter(property => {
            const [minPrice, maxPrice] = price.split('-').map(price => Number.parseInt(price));

            if (
                location.toLowerCase().replace(/\s/g, '') === property.location.toLowerCase().replace(/\s/g, '') &&
                property.price.int >= minPrice &&
                property.price.int <= maxPrice &&
                type.toLowerCase() === property.type.toLowerCase()

            ) {
                return property
            }
        }))
    }
    // Search Apartments
    if (property.toLowerCase() === 'apartment') {
        useMemo(() => setResults(filterResults(apartmentsData)), [searchPrompt])
    }
    // Search Houses
    else if (property.toLowerCase() === 'house') {
        useMemo(() => setResults(filterResults(housesData)), [searchPrompt])
    }

    return (
        <Container className='pt-4 bg-white'>
            {results.length > 0 ?
                <Results results={results} />

                : <div className='text-center space-y-3 animate'>
                    {/* Animation */}
                    <div className='relative w-full mx-auto max-w-[9rem] h-36 md:max-w-[11rem] md:h-40'>
                        <Image fill
                            alt='no result found'
                            placeholder='empty'
                            sizes='100vh'
                            src={'/search-results-not-found.gif'} />
                    </div>
                    {/* Massage*/}
                    <h4 className='md:text-base text-sm'>
                        Result not found
                    </h4>
                </div>}
        </Container>
    );
};


// Results Show from here
const Results = ({ results }) => {
    return (
        <div className='animate space-y-5 text-blue-500'>
            {/* Title */}
            <h3 className='text-xl'>Results</h3>

            {/* Results */}
            <div className='grid lg:grid-cols-3 gap-x-5 gap-y-5 sm:grid-cols-2 grid-cols-1'>
                {results.map(property => (
                    <PropertyCard
                        key={property.id}
                        property={property} />
                ))}
            </div>
        </div>
    )
}
export default SearchResults;