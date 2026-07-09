import {motion} from "framer-motion";
import * as S from "./styles/ContactCTAStyles.tsx";
import { useTranslation } from "react-i18next";

export const ContactCTA = () => {

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
            <S.Section id="contact">

                <S.Card>

                    <S.Title>
                        {t("contact.title")}
                    </S.Title>

                    <S.Text>
                        {t("contact.description")}
                    </S.Text>
                    <S.Text>
                        <S.Phone href="tel:+380660827985">
                            +380 (66) 082-79-85
                        </S.Phone>
                    </S.Text>

                    <S.Text>
                        <S.Email href="mailto:bohdan.krav4enko@gmail.com">
                            bohdan.krav4enko@gmail.com
                        </S.Email>
                    </S.Text>

                    <S.Button href="mailto:bohdan.krav4enko@gmail.com">
                        {t("contact.button")}
                    </S.Button>

                    <S.ResponseTime>
                        {t("contact.responseTime")}
                    </S.ResponseTime>

                </S.Card>

            </S.Section>
        </motion.div>
    );
};