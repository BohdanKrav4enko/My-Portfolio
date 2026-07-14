import * as S from "./styles/ServicesStyle";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "../animatedSection";

import {
    FaBolt,
    FaDatabase,
    FaPalette,
    FaReact,
} from "react-icons/fa";


export const Services = () => {

    const { t } = useTranslation();


    return (
        <AnimatedSection>

            <S.Section
                id="services"
                aria-labelledby="services-title"
            >


                <S.Title id="services-title">

                    {t("services.title")}

                </S.Title>



                <S.Subtitle>

                    {t("services.subtitle")}

                </S.Subtitle>




                <S.TopRow>


                    <S.FrontendCard
                        as="article"
                    >

                        <S.IconWrapper aria-hidden="true">

                            <FaReact />

                        </S.IconWrapper>



                        <h3>

                            {t("services.cards.frontend.title")}

                        </h3>



                        <p>

                            {t("services.cards.frontend.description")}

                        </p>


                    </S.FrontendCard>




                    <S.UiCard
                        as="article"
                    >

                        <S.IconWrapper
                            purple
                            aria-hidden="true"
                        >

                            <FaPalette />

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


                    <S.ApiCard
                        as="article"
                    >

                        <S.IconWrapper
                            orange
                            aria-hidden="true"
                        >

                            <FaDatabase />

                        </S.IconWrapper>



                        <h3>

                            {t("services.cards.api.title")}

                        </h3>



                        <p>

                            {t("services.cards.api.description")}

                        </p>


                    </S.ApiCard>





                    <S.PerformanceCard
                        as="article"
                    >

                        <S.IconWrapper
                            green
                            aria-hidden="true"
                        >

                            <FaBolt />

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