import * as S from "./styles/FooterStyle";
import {useTranslation} from "react-i18next";
import {Socials} from "../Socials.tsx";

export const Footer = () => {

    const {t} = useTranslation();

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

                <Socials/>

            </S.Container>

            <S.Bottom>
                {t("footer.copyright")}
            </S.Bottom>

        </S.Footer>
    );
};