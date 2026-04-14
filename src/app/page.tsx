import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Story } from "../components/story";
import { Schedule } from "../components/schedule";
import { Location } from "../components/location";
import { Accommodation } from "../components/accommodation";
import { FAQ } from "../components/faq";
import { Rsvp } from "../components/rsvp";
import { Footer } from "../components/footer";
import { SiteIntro } from "../components/site-intro";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <SiteIntro />
      <div className="pointer-events-none absolute -left-28 top-36 h-72 w-72 rounded-full bg-[var(--primary)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-[42rem] h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-[95rem] h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-3xl" />
      <Header />
      <Hero />
      <main className="relative z-10 mx-auto max-w-6xl space-y-7 px-6 pb-8 lg:px-8">
        <Story />
        <Schedule />
        <Location />
        <Accommodation />
        <FAQ />
        <Rsvp />
      </main>
      <Footer />
    </div>
  );
}
