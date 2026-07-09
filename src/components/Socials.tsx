import * as S from "./footer/styles/FooterStyle.tsx";
import {footerSocialsData} from "./footer/footerItems/footerSocialsData.ts";

export const Socials = () => {
    return (
        <S.Right>
            {footerSocialsData.map((social) => {
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
    );
};

