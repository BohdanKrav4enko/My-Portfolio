import { motion } from "framer-motion";
import * as S from "./styles/EducationStyle";
import { useTranslation } from "react-i18next";

import {
    FaGraduationCap,
    FaUniversity,
    FaCode
} from "react-icons/fa";

export const Education = () => {

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
            <S.Section id="education">

                <S.Title>
                    {t("education.titleFirst")}{" "}
                    <span>{t("education.titleSecond")}</span>
                </S.Title>

                <S.Subtitle>
                    {t("education.subtitle")}
                </S.Subtitle>

                <S.Card>

                    <S.IconWrapper>
                        <FaGraduationCap/>
                    </S.IconWrapper>

                    <S.Content>

                        <S.Degree>
                            {t("education.degree")}
                        </S.Degree>

                        <S.University>
                            {t("education.university")}
                        </S.University>

                        <S.Period>
                            │ 2017 — 2020
                        </S.Period>

                        <S.Description>
                            {t("education.description")}
                        </S.Description>

                        <S.Tags>
                            <S.Tag>
                                <FaCode/>
                                {t("education.tags.programming")}
                            </S.Tag>

                            <S.Tag>
                                <FaUniversity/>
                                {t("education.tags.higherEducation")}
                            </S.Tag>
                        </S.Tags>

                    </S.Content>

                </S.Card>

            </S.Section>
        </motion.div>
    );
};