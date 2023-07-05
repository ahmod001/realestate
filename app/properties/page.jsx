import dynamic from 'next/dynamic';
import React from 'react';
const Properties = dynamic(()=>import('@/Components/Properties/Properties'))
// SEO
export const metadata = {
    title: 'Realhome: Properties',
    description: 'Discover a wide range of exceptional real estate properties at our platform. From luxurious apartments in bustling cities to elegant homes in serene neighborhoods, we offer the perfect choices for your dream living. Explore our extensive property listings, advanced search filters, and expert real estate agents ready to assist you every step of the way. Experience a user-friendly interface that allows seamless navigation and management of your listings. Find your ideal property effortlessly and embark on a remarkable journey towards your dream home.',
}

const page = () => {
    return (
        <section className='min-h-screen animate py-20'>        
            <Properties />
        </section>
    );
};

export default page;