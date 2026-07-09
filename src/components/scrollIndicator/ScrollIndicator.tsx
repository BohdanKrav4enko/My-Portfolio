import * as S from "./styles/ScrollIndicatorStyle"

export const ScrollIndicator = () => {
    return (
        <S.ScrollWrapper href="#technology">
            <S.Mouse>
                <S.Wheel />
            </S.Mouse>

            <S.Text>Scroll</S.Text>
        </S.ScrollWrapper>
    );
};