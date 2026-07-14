import styled from "styled-components";

export const Footer = styled.footer`
    max-width: 1400px;

    margin: 120px auto 0;

    padding: 60px 40px;

    border-top: 1px solid rgba(255,255,255,.08);
`;

export const Container = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 40px;

    margin-bottom: 48px;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Left = styled.div`
    max-width: 500px;
`;

export const Logo = styled.p`
    font-size: 42px;

    font-weight: 700;

    margin: 0 0 16px;

    line-height: 1.2;

    span {
        background: linear-gradient(
                90deg,
                #7c5cff,
                #00d4ff
        );

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const Description = styled.p`
    color: #8f8f8f;

    line-height: 1.8;
`;

export const SocialNav = styled.nav`
    display: flex;
    align-items: center;
`;

export const Right = styled.div`
    display: flex;

    gap: 16px;
`;

export const Social = styled.a`
    width: 54px;
    height: 54px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: rgba(255,255,255,.04);

    border: 1px solid rgba(255,255,255,.08);

    color: white;

    font-size: 20px;

    transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;

    &:hover {
        transform: translateY(-6px);

        border-color: #7c5cff;

        box-shadow:
                0 0 25px rgba(124,92,255,.3);
    }

    &:focus-visible {
        outline: 3px solid #00d4ff;
        outline-offset: 4px;
    }
`;

export const Bottom = styled.small`
    display: block;

    padding-top: 32px;

    border-top: 1px solid rgba(255,255,255,.05);

    text-align: center;

    color: #777;

    font-size: 14px;
`;