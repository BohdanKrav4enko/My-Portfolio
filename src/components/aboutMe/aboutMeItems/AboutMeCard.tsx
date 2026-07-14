import * as S from "../styles/AboutMeStyle";
import type { IconType } from "react-icons";

interface AboutMeItemProps {
    icon: IconType;
    title: string;
    description: string;
}

export const AboutMeCard = ({
                                icon: Icon,
                                title,
                                description,
                            }: AboutMeItemProps) => {
    return (
        <S.Card>
            <Icon aria-hidden="true" focusable="false" />

            <h3>{title}</h3>

            <p>{description}</p>
        </S.Card>
    );
};