import {Hero} from "@/components/Hero.tsx";
import {About} from "@/pages/About.tsx";
import {Works} from "@/components/Works.tsx";
import {Contact} from "@/pages/Contact.tsx";

export default function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Works/>
            <Contact/>
        </>
    );
}