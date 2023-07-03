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

const page = async ({ params: { id } }) => {

    // Get Random agent
    const fetchAgent = async () => {
        const res = await fetch('https://randomuser.me/api/?gender=female');
        if (res.ok) {
            const agent = await res.json();
            return agent.results[0];
        } else {
            throw new Error('Agent fetch failed')
        }
    }
    const agent = await fetchAgent();

    return (
        <section className='min-h-screen animate py-20'>
            <PropertyDetails
                agent={agent}
                property={getProperty(id)} />
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