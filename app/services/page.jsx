import dynamic from "next/dynamic";
const Services =dynamic(()=> import("@/Components/Services/Services"))

// SEO
export const metadata = {
    title: 'Realhome: Services',
    description: 'Discover our trusted real estate services: Property Listing, Property Search, Property Evaluation, Property Management, Investment Guidance, and Legal Support. Boost property visibility, find your ideal property, get accurate valuations, simplify management tasks, make informed investment decisions, and ensure a smooth process with our comprehensive solutions.',
}

const ServicesPage = () => {
    return (
        <div className=" min-h-screen py-20 flex items-center">
            <Services />
        </div>
    );
};

export default ServicesPage;
