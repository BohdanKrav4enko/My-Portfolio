import styled, { css } from "styled-components";

export const Section = styled.section`
    max-width: 1400px;
    margin: 0 auto;
    padding: 120px 40px;
`;

export const Title = styled.h2`
    font-size: clamp(32px, 7vw, 72px);
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 700px;
    margin: 0 auto 80px;
    text-align: center;
    color: #8f8f8f;
    line-height: 1.8;
`;

export const TopRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
    margin-bottom: 24px;

    align-items: stretch;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`;

export const BottomRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 24px;

    align-items: stretch;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.div`
    background: rgba(255, 255, 255, 0.03);

    border: 1px solid rgba(255, 255, 255, 0.08);

    border-radius: 32px;

    padding: 40px;

    height: 320px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    transition: .3s;

    &:hover {
        transform: translateY(-8px);

        border-color: rgba(124, 92, 255, 0.5);

        box-shadow:
                0 0 40px rgba(124, 92, 255, 0.15);
    }

    h3 {
        font-size: clamp(22px, 3vw, 30px);

        line-height: 1.2;

        margin-bottom: 20px;

        text-wrap: balance;
    }

    p {
        color: #9a9a9a;

        line-height: 1.8;

        max-width: 500px;

        display: -webkit-box;

        -webkit-line-clamp: 3;

        -webkit-box-orient: vertical;

        overflow: hidden;
    }


    @media (max-width: 768px) {

        height: auto;

        min-height: 260px;

        padding: 32px;
    }


    @media (max-width: 480px) {

        padding: 28px 24px;

        min-height: auto;


        h3 {
            font-size: 24px;
        }


        p {
            font-size: 15px;

            line-height: 1.7;
        }
    }
`;

export const FrontendCard = styled(Card)`
    background:
            radial-gradient(
                    circle at top right,
                    rgba(124,92,255,.08),
                    transparent 40%
            ),
            rgba(255,255,255,.03);
`;

export const UiCard = styled(Card)`
    background:
            radial-gradient(
                    circle at top right,
                    rgba(124,92,255,.08),
                    transparent 40%
            ),
            rgba(255,255,255,.03);
`;

export const ApiCard = styled(Card)`
    background:
            radial-gradient(
                    circle at top right,
                    rgba(124,92,255,.08),
                    transparent 40%
            ),
            rgba(255,255,255,.03);
`;

export const PerformanceCard = styled(Card)`
    background:
            radial-gradient(
                    circle at top right,
                    rgba(124,92,255,.08),
                    transparent 40%
            ),
            rgba(255,255,255,.03);
`;

interface IconProps {
    purple?: boolean;
    orange?: boolean;
    green?: boolean;
}

export const IconWrapper = styled.div<IconProps>`
    width: 64px;
    height: 64px;

    border-radius: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 28px;

    background: rgba(59, 130, 246, 0.15);
    color: #3b82f6;

    svg {
        font-size: 30px;
    }

    ${(props) =>
            props.purple &&
            css`
                background: rgba(168, 85, 247, 0.15);
                color: #a855f7;
            `}

    ${(props) =>
            props.orange &&
            css`
                background: rgba(249, 115, 22, 0.15);
                color: #f97316;
            `}

    ${(props) =>
            props.green &&
            css`
                background: rgba(34, 197, 94, 0.15);
                color: #22c55e;
            `}
`;