import * as S from "./styles/ContactCTAStyles.tsx";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "../animatedSection";
import { EMAIL, PHONE, PHONE_FORMATTED } from "../../constants/contacts.ts";
import { Socials } from "../Socials.tsx";

export const ContactCTA = () => {
    const { t } = useTranslation();

    return (
        <AnimatedSection>
            <S.Section
                id="contact"
                aria-labelledby="contact-title"
            >
                <S.Card>
                    <S.Title id="contact-title">
                        {t("contact.title")}
                    </S.Title>

                    <S.Text>
                        {t("contact.description")}
                    </S.Text>

                    <S.ContactInfo>
                        <S.Phone href={`tel:${PHONE}`}>
                            {PHONE_FORMATTED}
                        </S.Phone>

                        <S.Email href={`mailto:${EMAIL}`}>
                            {EMAIL}
                        </S.Email>
                    </S.ContactInfo>

                    <S.Button href={`mailto:${EMAIL}`}>
                        {t("contact.button")}
                    </S.Button>

                    <S.ResponseTime>
                        {t("contact.responseTime")}
                    </S.ResponseTime>

                    <S.SocialsContainer
                        aria-label={t("contact.socials")}
                    >
                        <Socials />
                    </S.SocialsContainer>
                </S.Card>
            </S.Section>
        </AnimatedSection>
    );
};