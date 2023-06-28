import DataSecurity from "@/Components/DataSecurity/DataSecurity";
import Hero from "@/Components/Hero/Hero/Hero";
import OurClients from "@/Components/OurClients/OurClients";
import OurFeatures from "@/Components/OurFeatures/OurFeatures";
import SubscribeUs from "@/Components/SubscribeUs/SubscribeUs";

export default function Home() {
  return (
    <section className="pb-10 animate sm:space-y-6 space-y-3 min-h-screen">
      <Hero />
      <div className="sm:space-y-24 space-y-14">
        <OurClients />
        <OurFeatures />
        <DataSecurity />
        <SubscribeUs/>
      </div>
    </section>
  )
}
