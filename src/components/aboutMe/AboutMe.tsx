import { motion } from "framer-motion";
import * as S from "./styles/AboutMeStyle";
import {useTranslation} from "react-i18next";
import {
    FaReact,
    FaCode,
    FaRocket,
    FaLaptopCode
} from "react-icons/fa";


export const AboutMe = () => {

    const { t } = useTranslation();

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
            <S.Section id="about">

                <S.Title>
                    {t("about.titleFirst")} <span>{t("about.titleSecond")}</span>
                </S.Title>

                <S.Subtitle>
                    {t("about.subtitle")}
                </S.Subtitle>

                <S.Grid>

                    <S.Card>
                        <FaCode/>

                        <h3>{t("about.cards.cleanCode.title")}</h3>

                        <p>
                            {t("about.cards.cleanCode.description")}
                        </p>
                    </S.Card>

                    <S.Card>
                        <FaReact/>

                        <h3>{t("about.cards.modernStack.title")}</h3>

                        <p>
                            {t("about.cards.modernStack.description")}
                        </p>
                    </S.Card>

                    <S.Card>
                        <FaLaptopCode/>

                        <h3>{t("about.cards.responsive.title")}</h3>

                        <p>
                            {t("about.cards.responsive.description")}
                        </p>
                    </S.Card>

                    <S.Card>
                        <FaRocket/>

                        <h3>{t("about.cards.growth.title")}</h3>

                        <p>
                            {t("about.cards.growth.description")}
                        </p>
                    </S.Card>

                </S.Grid>

            </S.Section>
        </motion.div>
    );
};