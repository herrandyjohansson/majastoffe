import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Story } from "../components/story";
import { Schedule } from "../components/schedule";
import { Location } from "../components/location";
import { Accommodation } from "../components/accommodation";
import { FAQ } from "../components/faq";
import { Rsvp } from "../components/rsvp";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <Hero />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <Story />
        <Schedule />
        <Location />
        <Accommodation />
        <FAQ />
        <Rsvp />
        <Footer />
      </main>
    </div>
  );
}
