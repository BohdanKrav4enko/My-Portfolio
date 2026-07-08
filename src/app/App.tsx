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

export const App = () => {

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

