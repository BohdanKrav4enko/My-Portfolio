import * as S from "./styles/AboutMeStyle";
import {useTranslation} from "react-i18next";
import {AboutMeCard} from "./aboutMeItems/AboutMeCard";
import {aboutMeData} from "./aboutMeItems/aboutMeData";
import {AnimatedSection} from "../animatedSection";

export const AboutMe = () => {

    const { t } = useTranslation();

    return (
        <AnimatedSection>
            <S.Section id="about">

                <S.Title>
                    {t("about.titleFirst")}{" "}
                    <span>{t("about.titleSecond")}</span>
                </S.Title>

                <S.Subtitle>
                    {t("about.subtitle")}
                </S.Subtitle>

                <S.Grid>
                    {aboutMeData.map((item) => (
                        <AboutMeCard
                            key={item.title}
                            icon={item.icon}
                            title={t(item.title)}
                            description={t(item.description)}
                        />
                    ))}
                </S.Grid>

            </S.Section>
        </AnimatedSection>
    );
};