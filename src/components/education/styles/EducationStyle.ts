import styled from "styled-components";

export const Section = styled.section`
    max-width: 1400px;
    margin: 0 auto;
    padding: 120px 40px;
`;

export const Title = styled.h2`
    text-align: center;

    font-size: clamp(32px, 7vw, 72px);

    margin-bottom: 20px;

    span {
        background: linear-gradient(
                135deg,
                #00d4ff 0%,
                #00d4ff 35%,
                #7c5cff 65%,
                #7c5cff 100%
        );

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    text-align: center;

    color: #888;

    max-width: 700px;

    margin: 0 auto 80px;

    line-height: 1.8;
`;

export const Card = styled.div`
    max-width: 900px;

    margin: 0 auto;

    padding: 50px;

    display: flex;
    gap: 40px;
    align-items: center;

    border-radius: 32px;

    background: rgba(255,255,255,.03);

    border: 1px solid rgba(255,255,255,.06);

    transition: .3s;

    &:hover {
        transform: translateY(-8px);

        border-color: rgba(124,92,255,.4);

        box-shadow:
            0 0 40px rgba(124,92,255,.15);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const IconWrapper = styled.div`
    min-width: 120px;
    min-height: 120px;

    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(124,92,255,.15);

    color: rgba(124,92,255,.85);

    font-size: 48px;
`;

export const Content = styled.div`
    flex: 1;
`;

export const Degree = styled.h3`
    font-size: 36px;
    margin-bottom: 10px;
`;

export const University = styled.h4`
    color: #d0d0d0;
    font-size: 22px;
    margin-bottom: 12px;
`;

export const Period = styled.div`
    color: #7c5cff;
    font-weight: 600;
    margin-bottom: 24px;
`;

export const Description = styled.p`
    color: #999;
    line-height: 1.8;
    margin-bottom: 28px;
`;

export const Tags = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`;

export const Tag = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 10px 18px;

    border-radius: 999px;

    background: rgba(255,255,255,.05);

    color: #ccc;

    svg {
        color: #7c5cff;
    }
`;