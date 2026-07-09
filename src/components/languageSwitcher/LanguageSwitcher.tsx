import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./styles/LanguageSwitcherStyles.tsx";

const languages = [
    {
        code: "en",
        name: "English"
    },
    {
        code: "de",
        name: "Deutsch"
    },
    {
        code: "ua",
        name: "Українська"
    },
    {
        code: "ru",
        name: "Русский"
    }
];


export const LanguageSwitcher = () => {

    const { i18n } = useTranslation();

    const [open, setOpen] = useState(false);


    const current =
        languages.find(
            lang => lang.code === i18n.language
        ) || languages[0];


    const changeLanguage = (code:string) => {
        i18n.changeLanguage(code);

        localStorage.setItem(
            "language",
            code
        );

        setOpen(false);
    };


    return (
        <S.Wrapper>

            <S.Button
                onClick={() => setOpen(prev => !prev)}
            >
                {current.code.toUpperCase()}

                <S.Arrow open={open}>
                    ▾
                </S.Arrow>

            </S.Button>


            {open && (
                <S.Dropdown>

                    {languages.map((lang) => (
                        <S.Item
                            key={lang.code}
                            active={lang.code === current.code}
                            onClick={() => changeLanguage(lang.code)}
                        >
                            {lang.name}
                        </S.Item>
                    ))}

                </S.Dropdown>
            )}

        </S.Wrapper>
    );
};