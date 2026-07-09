import * as S from "./styles/TechStackStyle";
import {useTranslation} from "react-i18next";
import {AnimatedSection} from "../animatedSection";
import {technologies} from "./techStackItems/techStackData.tsx";

export const TechStack = () => {

    const { t } = useTranslation();

    return (
        <AnimatedSection>
            <S.Section id="technology">

                <S.Title>
                    {t("technology.title")}
                </S.Title>

                <S.Subtitle>
                    {t("technology.subtitle")}
                </S.Subtitle>

                <S.Grid>
                    {technologies.map((tech) => (
                        <S.Card key={tech.title}>
                            {tech.icon}
                            {tech.title}
                        </S.Card>
                    ))}
                </S.Grid>

            </S.Section>
        </AnimatedSection>
    );
};