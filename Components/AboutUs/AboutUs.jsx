import React from 'react';
import Image from "next/image";
import { mainPlaceholderImgData } from '@/store/propertiesData';

const AboutUs = () => {
    const whyUs = [{
        title: 'Extensive Property Listings', description: `With thousands of properties listed on our platform, you'll have access to a wide range of options.From luxurious penthouses to cozy family homes, we have something for everyone.`
    },
    {
        title: 'Advanced Search Filters', description: `Our advanced search filters allow you to narrow down your search based on location, price range,
        property type, and more. Find your ideal property with just a few clicks.`
    },
    {
        title: 'Expert Real Estate Agents', description: `Our team of experienced real estate agents is ready to assist you at every step of your journey.
        From property selection to negotiation and closing deals, we provide personalized support and guidance.`
    },
    {
        title: 'User-Friendly Interface', description: `Our platform is designed to be intuitive and easy to navigate. Explore properties, save your favorites,
        and manage your listings seamlessly with our user-friendly interface.`
    }
    ]
    return (
        <div className="animate pt-11">
        <div className="bg-white py-14">
            {/* Title */}
            <div className="container mx-auto px-4">
                <h1 className="xl:text-4xl lg:text-3xl sm:text-2xl text-xl text-center text-gray-800 font-medium mb-6">
                    Introducing Realhome - Your Ultimate Real Estate Solution
                </h1>
                {/* Description */}
                <div className="max-w-4xl mx-auto">
                    <p className="xl:text-lg text-sm text-justify text-gray-600">
                        Welcome to <strong>Realhome</strong>, the leading online platform for all your real estate needs.
                        Whether you're looking to buy, rent, or sell apartments and houses, we've got you covered.
                        Our user-friendly interface and extensive listings make it easier than ever to find your dream property.
                    </p>
                </div>
            </div>
        </div>

        {/* Why Us */}
        <div className="py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="lg:text-3xl text-2xl text-center text-gray-800 font-semibold mb-8">
                        Why Choose Realhome?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {whyUs.map((texts, i) => (
                            <div key={i}>
                                {/* Title */}
                                <h3 className="lg:text-xl text-lg text-gray-800 font-semibold mb-2">
                                    {texts.title}
                                </h3>
                                {/* Description */}
                                <p className="text-gray-600 text-sm">
                                    {texts.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="bg-lightblue-100 py-16">
            <div className="container mx-auto lg:space-y-6 space-y-4 px-4">
                {/* Title */}
                <h2 className="lg:text-3xl md:text-2xl text-xl text-center text-gray-800 font-semibold">
                    Start your real estate journey with Realhome today!
                </h2>
                {/* Call to action*/}
                    <p className="lg:text-xl md:text-lg text-center text-gray-600 ">
                        Your dream property awaits!
                    </p>

                    {/* Property img */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-[31rem] h-[19.5rem] md:max-w-[40rem] md:h-[26rem]">
                            <Image src='/about-us-house.jpg'
                                fill sizes='100vh'
                                placeholder="blur"
                                blurDataURL={mainPlaceholderImgData}
                                className="rounded-sm"
                                priority={true}
                                alt="beautiful property" />
                        </div>
                    </div>
            </div>
        </div>
    </div >
    );
};

export default AboutUs;