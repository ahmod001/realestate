"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import { Container} from '@mui/material';
import { Apartment, Assessment, Gavel, Home, Insights, ManageHistory, Search } from "@mui/icons-material";

const Services = () => {
    const services = [
        {
            title: 'Property Listing',
            description:
                'List your properties on our platform and reach potential buyers and tenants. Increase your property visibility and get more inquiries.',
            icon: <Home color="primary" fontSize="inherit" />,
        },
        {
            title: 'Property Search',
            description:
                'Easily search and find properties that match your requirements. Use our advanced search filters to narrow down your options and find your ideal property.',
            icon: <Search color="primary" fontSize="inherit" />,
        },
        {
            title: 'Property Evaluation',
            description:
                'Get a professional evaluation of your property\'s market value. Our experts will assess your property and provide an accurate valuation report.',
            icon: <Assessment color="primary" fontSize="inherit" />,
        },
        {
            title: 'Property Management',
            description:
                'Efficiently manage your properties, including maintenance and tenant communication. Simplify your property management tasks with our comprehensive solutions.',
            icon: <Apartment color="primary" fontSize="inherit" />,
        },
        {
            title: 'Investment Guidance',
            description:
                'Receive expert advice on real estate investment strategies and market trends. Stay informed and make well-informed investment decisions.',
            icon: <Insights color="primary" fontSize="inherit" />,
        },
        {
            title: 'Legal Support',
            description:
                'Access legal resources and guidance for property transactions and contracts. Ensure a smooth and legally compliant process with our support.',
            icon: <Gavel color="primary" fontSize="inherit" />,
        },
    ];

    return (
        <Container className='animate'>
            <div className='mb-7'>
                {/* Title */}
                <h1 className="xl:text-4xl lg:text-3xl text-2xl text-center text-gray-800 font-semibold mb-5">
                    Our Services
                </h1>

                {/* Description */}
                <p className=" lg:text-base text-sm text-center text-gray-600">
                    We offer a range of services to help you buy, sell, or rent your property.
                </p>
            </div>

            {/* Service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-4 rounded-md hover:shadow-sm hover:bg-gray-50/20 transition-all duration-40">
                        {/* Icon */}
                        <div className="flex items-center justify-center h-10 w-10 bg-blue-100 rounded-md lg:mb-6 mb-5">
                            {service.icon}
                        </div>
                        {/* Title */}
                        <Typography variant="h6" gutterBottom>
                            {service.title}
                        </Typography>
                        {/* Description */}
                        <Typography textAlign={'justify'} variant="body2" color="textSecondary">
                            {service.description}
                        </Typography>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Services;