import ApartmentsForSell from "@/Components/ApartmentsForSell/ApartmentsForSell";
import LoadingApartments from "@/Components/ApartmentsForSell/LoadingApartments/LoadingApartments";
import CustomerReviews from "@/Components/CustomerReviews/CustomerReviews";
import LoadingReviews from "@/Components/CustomerReviews/loadingReviews/LoadingReviews";
import DataSecurity from "@/Components/DataSecurity/DataSecurity";
import Hero from "@/Components/Hero/Hero/Hero";
import OurClients from "@/Components/OurClients/OurClients";
import OurFeatures from "@/Components/OurFeatures/OurFeatures";
import dynamic from "next/dynamic";
const SubscribeUs = dynamic(() => import("@/Components/SubscribeUs/SubscribeUs"))
import { Suspense } from "react";

// SEO
export const metadata = {
  title: 'Realhome: Seamless Property Solutions',
  description: 'Discover and secure your dream property effortlessly with Realhome. Explore, buy, and book premium real estate listings for a seamless experience.'
}

export default function Home() {
  const fetchUsers = async () => {
    const res = await fetch('https://randomuser.me/api/?results=6');
    if (res.ok) {
      const user = await res.json();
      return user.results;
    } else {
      throw new Error('failed to fetch users')
    }
  }

  return (
    <section className="pb-10 animate sm:space-y-6 space-y-3 min-h-screen">
      <Hero />
      <div className="sm:space-y-24 space-y-14">
        <OurClients />
        <OurFeatures />
        <Suspense fallback={<LoadingApartments />}>
          <ApartmentsForSell />
        </Suspense>
        <DataSecurity />
        <Suspense fallback={<LoadingReviews />}>
          <CustomerReviews
            users={fetchUsers()} />
        </Suspense>
        <SubscribeUs />
      </div>
    </section>
  )
}
