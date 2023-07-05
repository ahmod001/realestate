import dynamic from "next/dynamic";
import React from "react";
const AboutUs = dynamic(() => import("@/Components/AboutUs/AboutUs"))

// SEO
export const metadata = {
    title: 'Realhome: About us',
    description: 'Explore thousands of properties with extensive listings. Use advanced search filters to find your ideal property. Trust our expert agents for personalized support. Enjoy a user-friendly interface for seamless property management'
}

const AboutPage = () => (
    <AboutUs />
)

export default AboutPage;
