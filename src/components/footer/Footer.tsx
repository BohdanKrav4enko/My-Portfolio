import * as S from "./styles/FooterStyle";
import { useTranslation } from "react-i18next";
import {
    FaGithub,
    FaTelegramPlane,
    FaLinkedinIn,
    FaEnvelope
} from "react-icons/fa";

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

                    <S.Social target="_blank" href="https://github.com/BohdanKrav4enko">
                        <FaGithub />
                    </S.Social>

                    <S.Social target="_blank" href="https://www.linkedin.com/in/bohdankrav4enko/">
                        <FaLinkedinIn />
                    </S.Social>

                    <S.Social target="_blank" href="https://t.me/bohdan_krav4enko">
                        <FaTelegramPlane />
                    </S.Social>

                    <S.Social href="mailto:bohdan.krav4enko@gmail.com">
                        <FaEnvelope />
                    </S.Social>

                </S.Right>

            </S.Container>

            <S.Bottom>
                {t("footer.copyright")}
            </S.Bottom>

        </S.Footer>
    );
};