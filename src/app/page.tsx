import { About } from "@/components/about";
import { Close } from "@/components/close";
import { Disciplines } from "@/components/disciplines";
import { Hero } from "@/components/hero";
import { Record } from "@/components/record";
import { SiteHeader } from "@/components/site-header";
import { Work } from "@/components/work";

export default function Page() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content">
        <Hero />
        <Work />
        <Record />
        <About />
        <Disciplines />
      </main>
      <Close />
    </>
  );
}
