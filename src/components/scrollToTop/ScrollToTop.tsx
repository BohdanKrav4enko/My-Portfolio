import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import * as S from "./style/ScrollToTopStyle.tsx";

export const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <S.Button
            $visible={visible}
            onClick={scrollToTop}
        >
            <FaArrowUp />
        </S.Button>
    );
};