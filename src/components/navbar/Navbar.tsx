import {useEffect, useState} from "react";
import * as S from "./styles/NavBarStyle";
import {LanguageSwitcher} from "../languageSwitcher";
import {useTranslation} from "react-i18next";

export const Navbar = () => {

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    const handleClick = (link: string) => {
        setActiveLink(link);
        setIsOpen(false);
    };

    const links = [
        {id: "home", label: t("nav.home")},
        {id: "technology", label: t("nav.technology")},
        {id: "services", label: t("nav.services")},
        {id: "projects", label: t("nav.projects")},
        {id: "about", label: t("nav.about")},
        {id: "education", label: t("nav.education")},
        {id: "contact", label: t("nav.contact")},
    ];

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
                    {links.map((link)=>(
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={activeLink === link.id ? "active" : ""}
                            onClick={() => handleClick(link.id)}
                        >
                            {link.label}
                        </a>
                    ))}
                </S.Menu>
                <S.Actions>
                    <LanguageSwitcher />
                    <S.ContactButton href="mailto:bohdan.krav4enko@gmail.com">
                        {t("nav.contactButton")}
                    </S.ContactButton>
                    <S.BurgerButton
                        onClick={() => setIsOpen(!isOpen)}
                        $open={isOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </S.BurgerButton>

                </S.Actions>
            </S.Container>

            <S.Overlay
                $open={isOpen}
                onClick={() => setIsOpen(false)}
            />

            <S.MobileMenu $open={isOpen}>
                {links.map((link)=>(
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={() => handleClick(link.id)}
                    >
                        {link.label}
                    </a>
                ))}

                <button onClick={() => setIsOpen(false)}>
                    {t("nav.contactButton")}
                </button>
            </S.MobileMenu>

        </S.Wrapper>
    );
};