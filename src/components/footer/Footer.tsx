import * as S from "./styles/FooterStyle";

import {
    FaGithub,
    FaTelegramPlane,
    FaLinkedinIn,
    FaEnvelope
} from "react-icons/fa";

export const Footer = () => {
    return (
        <S.Footer>

            <S.Container>

                <S.Left>

                    <S.Logo>
                        Bohdan Kravchenko<span>.</span>
                    </S.Logo>

                    <S.Description>
                        Frontend Developer focused on building
                        modern web applications with React
                        and TypeScript.
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

                    <S.Social href="mailto:bohdan.krav4enko@email.com">
                        <FaEnvelope />
                    </S.Social>

                </S.Right>

            </S.Container>

            <S.Bottom>
                © 2026 Bogdan Kravchenko • Built with React, Next.js and Node.js.
            </S.Bottom>

        </S.Footer>
    );
};