import {motion} from "framer-motion";
import * as S from "./styles/ContactCTAStyles.tsx";

export const ContactCTA = () => {
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
                        Have an Idea? Let's Build It Together.
                    </S.Title>

                    <S.Text>
                        Open to frontend opportunities, freelance projects
                        and collaborations worldwide.
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
                        Contact Me
                    </S.Button>

                    <S.ResponseTime>
                        Usually reply within 24 hours.
                    </S.ResponseTime>

                </S.Card>

            </S.Section>
        </motion.div>
    );
};