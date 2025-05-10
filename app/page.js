import Hero from "@/components/hero"
import HowItWorks from "@/components/HowItWorks"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      
    </main>
  );
}
