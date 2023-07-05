import dynamic from 'next/dynamic';
import React from 'react';
const TrustAndSecurity = dynamic(()=>import('@/Components/Trust&Security/Trust&Security'))

// SEO
export const metadata = {
    title: 'Realhome: Trust & Security',
    description: 'Building trust, enhanced security, state-of-the-art surveillance, data privacy, earned trust, and partnership with a reliable real estate agency. Experience excellence, trust, and uncompromising security for your property endeavors.',
}

const Page = () => {
    return (
        <section className="pt-20 animate pb-10">
        <TrustAndSecurity/>
        </section>
    );
};

export default Page;
