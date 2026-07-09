import {
    AboutMe,
    ContactCTA,
    Education,
    Footer,
    Hero,
    Navbar,
    Projects,
    ScrollToTop,
    Services,
    TechStack
} from "../components";
import {useLenis} from "../hooks/useLenis.ts";

export const App = () => {
    useLenis();
    return <>
        <ScrollToTop/>
        <Navbar/>
        <Hero/>
        <TechStack/>
        <Services/>
        <Projects/>
        <AboutMe/>
        <Education/>
        <ContactCTA/>
        <Footer/>
    </>
}

