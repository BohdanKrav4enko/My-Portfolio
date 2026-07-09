import {useState} from "react";
import {useTranslation} from "react-i18next";
import * as S from "./styles/NavBarStyle";
import {LanguageSwitcher} from "../languageSwitcher";
import {DesktopMenu} from "./navbarItems/DesktopMenu.tsx";
import {getNavbarLinks} from "./navbarItems/navbarLinks.ts";
import {useActiveSection} from "../../hooks/useActiveSection.ts";
import {MobileMenu} from "./navbarItems/MobileMenu.tsx";
import {scrollToSection} from "../../utils/scrollToSection.ts";

export const Navbar = () => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const { activeLink, setActiveLink } = useActiveSection();

    const links = getNavbarLinks(t);

    const handleClick = (id: string) => {
        setActiveLink(id);
        setIsOpen(false);
        scrollToSection(id);
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.Logo>BK</S.Logo>

                <S.Menu>
                    <DesktopMenu
                        links={links}
                        activeLink={activeLink}
                        onClick={handleClick}
                    />
                </S.Menu>

                <S.Actions>
                    <LanguageSwitcher />

                    <S.ContactButton onClick={() => scrollToSection("contact")}>
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
                <MobileMenu
                    links={links}
                    onClick={handleClick}
                />

                <button onClick={() => {
                    setIsOpen(false)
                    scrollToSection("contact")
                }}>
                    {t("nav.contactButton")}
                </button>
            </S.MobileMenu>
        </S.Wrapper>
    );
};