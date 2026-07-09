import {motion} from "framer-motion";
import * as S from "./styles/ServicesStyle";
import {useTranslation} from "react-i18next";

import {
    FaReact,
    FaPalette,
    FaDatabase,
    FaBolt,
} from "react-icons/fa";

export const Services = () => {

    const {t} = useTranslation();

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
        >
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
        </motion.div>
    );
};