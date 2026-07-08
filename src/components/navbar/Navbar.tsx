import {useEffect, useState} from "react";
import * as S from "./styles/NavBarStyle";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    const handleClick = (link: string) => {
        setActiveLink(link);
        setIsOpen(false);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <S.Wrapper>
            <S.Container>

                <S.Logo>
                    BK
                </S.Logo>

                <S.Menu>
                    <a
                        href="#home"
                        className={activeLink === "home" ? "active" : ""}
                        onClick={() => handleClick("home")}
                    >
                        Home
                    </a>

                    <a
                        href="#technology"
                        className={activeLink === "technology" ? "active" : ""}
                        onClick={() => handleClick("technology")}
                    >
                        Technology
                    </a>

                    <a
                        href="#services"
                        className={activeLink === "services" ? "active" : ""}
                        onClick={() => handleClick("services")}
                    >
                        Services
                    </a>

                    <a
                        href="#projects"
                        className={activeLink === "projects" ? "active" : ""}
                        onClick={() => handleClick("projects")}
                    >
                        Projects
                    </a>

                    <a
                        href="#about"
                        className={activeLink === "about" ? "active" : ""}
                        onClick={() => handleClick("about")}
                    >
                        About
                    </a>

                    <a
                        href="#education"
                        className={activeLink === "education" ? "active" : ""}
                        onClick={() => handleClick("education")}
                    >
                        Education
                    </a>

                    <a
                        href="#contact"
                        className={activeLink === "contact" ? "active" : ""}
                        onClick={() => handleClick("contact")}
                    >
                        Contact
                    </a>
                </S.Menu>

                <S.ContactButton href="mailto:bohdan.krav4enko@gmail.com">
                    Contact Me
                </S.ContactButton>

                <S.BurgerButton
                    onClick={() => setIsOpen(!isOpen)}
                    $open={isOpen}
                >
                    <span />
                    <span />
                    <span />
                </S.BurgerButton>

            </S.Container>

            <S.Overlay
                $open={isOpen}
                onClick={() => setIsOpen(false)}
            />

            <S.MobileMenu $open={isOpen}>
                <a href="#home" onClick={() => handleClick("home")}>
                    Home
                </a>

                <a href="#technology" onClick={() => handleClick("technology")}>
                    Technology
                </a>

                <a href="#services" onClick={() => handleClick("services")}>
                    Services
                </a>

                <a href="#projects" onClick={() => handleClick("projects")}>
                    Projects
                </a>

                <a href="#about" onClick={() => handleClick("about")}>
                    About
                </a>

                <a href="#education" onClick={() => handleClick("education")}>
                    Education
                </a>

                <a href="#contact" onClick={() => handleClick("contact")}>
                    Contact
                </a>

                <button onClick={() => setIsOpen(false)}>
                    Contact Me
                </button>
            </S.MobileMenu>

        </S.Wrapper>
    );
};