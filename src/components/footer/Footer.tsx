import * as S from "./styles/FooterStyle";
import {useTranslation} from "react-i18next";
import {footerSocials} from "./footerItems/footerSocials.ts";

export const Footer = () => {

    const { t } = useTranslation();

    return (
        <S.Footer>

            <S.Container>

                <S.Left>

                    <S.Logo>
                        Bohdan Kravchenko<span>.</span>
                    </S.Logo>

                    <S.Description>
                        {t("footer.description")}
                    </S.Description>

                </S.Left>

                <S.Right>
                    {footerSocials.map((social) => {
                        const Icon = social.icon;

                        return (
                            <S.Social
                                key={social.href}
                                href={social.href}
                                target={social.target}
                            >
                                <Icon />
                            </S.Social>
                        );
                    })}
                </S.Right>

            </S.Container>

            <S.Bottom>
                {t("footer.copyright")}
            </S.Bottom>

        </S.Footer>
    );
};