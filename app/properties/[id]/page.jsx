import PropertyDetails from '@/Components/Properties/PropertyDetails/PropertyDetails';
import { apartmentsData, housesData } from '@/store/propertiesData';
import React from 'react';

// SEO
export const generateMetadata = ({ params: { id } }) => {
    const property = getProperty(id);
    return {
        title: 'Realhome: ' + property.title,
        description: property.description
    }
}

const page = ({ params: { id } }) => {

    return (
        <section className='h-screen py-16'>
            <PropertyDetails property={getProperty(id)} />
        </section>
    );
};

// Find Property by id
const getProperty = (id) => {
    return (
        [...housesData, ...apartmentsData].find(property => property.id === Number.parseInt(id))
    )
}
export default page;