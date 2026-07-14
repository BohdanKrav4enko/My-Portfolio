import { AnimatedSection } from "../animatedSection";
import * as S from "./styles/EducationStyle";
import { useTranslation } from "react-i18next";
import { FaCode, FaGraduationCap, FaUniversity } from "react-icons/fa";

export const Education = () => {
    const { t } = useTranslation();

    return (
        <AnimatedSection>
            <S.Section
                id="education"
                aria-labelledby="education-title"
            >
                <S.Title id="education-title">
                    {t("education.titleFirst")}{" "}
                    <span>{t("education.titleSecond")}</span>
                </S.Title>

                <S.Subtitle>
                    {t("education.subtitle")}
                </S.Subtitle>

                <S.Card>

                    <S.IconWrapper>
                        <FaGraduationCap
                            aria-hidden="true"
                            focusable="false"
                        />
                    </S.IconWrapper>

                    <S.Content>

                        <S.Degree>
                            {t("education.degree")}
                        </S.Degree>

                        <S.University>
                            {t("education.university")}
                        </S.University>

                        <S.Period>
                            2017 — 2020
                        </S.Period>

                        <S.Description>
                            {t("education.description")}
                        </S.Description>

                        <S.Tags>
                            <S.Tag>
                                <FaCode
                                    aria-hidden="true"
                                    focusable="false"
                                />
                                {t("education.tags.programming")}
                            </S.Tag>

                            <S.Tag>
                                <FaUniversity
                                    aria-hidden="true"
                                    focusable="false"
                                />
                                {t("education.tags.higherEducation")}
                            </S.Tag>
                        </S.Tags>

                    </S.Content>

                </S.Card>

            </S.Section>
        </AnimatedSection>
    );
};