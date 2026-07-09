import * as S from "./styles/ScrollIndicatorStyle"
import {scrollToSection} from "../../utils/scrollToSection.ts";

export const ScrollIndicator = () => {
    return (
        <S.ScrollWrapper onClick={()=> scrollToSection("technology")}>
            <S.Mouse>
                <S.Wheel />
            </S.Mouse>

            <S.Text>Scroll</S.Text>
        </S.ScrollWrapper>
    );
};