import * as S from "./styles/HeroStyles.tsx";
import img from '../../assets/avatar.webp'
import {ScrollIndicator} from "../scrollIndicator";
import { useTranslation } from "react-i18next";


export const Hero = () => {

    const { t } = useTranslation();

    return (<>
            <S.Section id="home">
                <S.Container>

                    <S.Left>
                        <S.Badge>
                            {t("hero.badge")}
                        </S.Badge>

                        <S.Title>
                            {t("hero.titleFirst")} <br/>
                            <span>{t("hero.titleSecond")}</span>
                        </S.Title>

                        <S.Description>
                            {t("hero.description")}
                        </S.Description>

                        <S.Buttons>
                            <S.PrimaryButton href="mailto:bohdan.krav4enko@gmail.com">
                                {t("hero.contact")}
                            </S.PrimaryButton>

                            <S.SecondaryButton
                                href="/Bohdan_Kravchenko_CV_en.pdf"
                                download
                            >
                                {t("hero.download")}
                            </S.SecondaryButton>
                        </S.Buttons>
                    </S.Left>

                    <S.Right>
                        <S.ImageWrapper>
                            <S.Avatar alt={'Avatar'} src={img}/>
                        </S.ImageWrapper>
                    </S.Right>

                </S.Container>
            </S.Section>
            <ScrollIndicator/>
        </>
    );
};