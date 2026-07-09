import * as S from "./styles/ServicesStyle";
import {useTranslation} from "react-i18next";
import {AnimatedSection} from "../animatedSection";
import {FaBolt, FaDatabase, FaPalette, FaReact,} from "react-icons/fa";

export const Services = () => {

    const {t} = useTranslation();

    return (
        <AnimatedSection>
            <S.Section id="services">
                <S.Title>
                    {t("services.title")}
                </S.Title>

                <S.Subtitle>
                    {t("services.subtitle")}
                </S.Subtitle>

                <S.TopRow>

                    <S.FrontendCard>
                        <S.IconWrapper>
                            <FaReact/>
                        </S.IconWrapper>

                        <h3>
                            {t("services.cards.frontend.title")}
                        </h3>

                        <p>
                            {t("services.cards.frontend.description")}
                        </p>
                    </S.FrontendCard>

                    <S.UiCard>
                        <S.IconWrapper purple>
                            <FaPalette/>
                        </S.IconWrapper>

                        <h3>
                            {t("services.cards.ui.title")}
                        </h3>

                        <p>
                            {t("services.cards.ui.description")}
                        </p>
                    </S.UiCard>

                </S.TopRow>

                <S.BottomRow>

                    <S.ApiCard>
                        <S.IconWrapper orange>
                            <FaDatabase/>
                        </S.IconWrapper>

                        <h3>
                            {t("services.cards.api.title")}
                        </h3>

                        <p>
                            {t("services.cards.api.description")}
                        </p>
                    </S.ApiCard>

                    <S.PerformanceCard>
                        <S.IconWrapper green>
                            <FaBolt/>
                        </S.IconWrapper>

                        <h3>
                            {t("services.cards.performance.title")}
                        </h3>

                        <p>
                            {t("services.cards.performance.description")}
                        </p>
                    </S.PerformanceCard>

                </S.BottomRow>
            </S.Section>
        </AnimatedSection>
    );
};