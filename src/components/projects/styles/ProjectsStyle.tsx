import styled from "styled-components";

export const Section = styled.section`
    max-width: 1400px;
    margin: 0 auto;
    padding: 120px 40px;
    scroll-margin-top: 120px;
`;

export const Badge = styled.div`
    width: fit-content;

    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;

    padding: 10px 18px;

    border-radius: 999px;

    background: rgba(0, 212, 255, 0.08);

    border: 1px solid rgba(0, 212, 255, 0.15);

    color: #00d4ff;

    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;

    backdrop-filter: blur(10px);

    box-shadow:
            0 0 20px rgba(0, 212, 255, 0.08);

    transition: .3s;

    &:hover {
        transform: translateY(-2px);

        box-shadow:
                0 0 30px rgba(0, 212, 255, 0.2);
    }

    svg {
        font-size: 12px;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;

    gap: 40px;

    margin-bottom: 64px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Title = styled.h2`
    font-size: clamp(48px, 7vw, 72px);

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
        background-clip: text;
    }
    @media (max-width: 480px) {
        font-size: 48px;
    }
`;

export const Subtitle = styled.p`
    color: #8d8d8d;
    margin-top: 20px;
`;

export const ViewAll = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;

    color: white;

    font-size: 16px;

    cursor: pointer;

    position: relative;

    padding-bottom: 6px;

    &::after {
        content: "";

        position: absolute;

        left: 0;
        bottom: 0;

        width: 0;
        height: 2px;

        background: linear-gradient(
                135deg,
                #00d4ff 0%,
                #00d4ff 35%,
                #7c5cff 65%,
                #7c5cff 100%
        );

        transition: .3s;
    }

    &:hover::after {
        width: 100%;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.06);
    border-radius: 28px;
    overflow: hidden;
    transition: .3s;
    &:hover img {
        transform: scale(1.05);
    }
    &:hover {
        transform: translateY(-10px);
        border-color: #7c5cff;
    }
`;

export const Image = styled.img`
    width: 100%;
    display: block;
    height: 220px;
    object-fit: cover;
    cursor: pointer;
    transition: .3s;
`;
export const Link = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;

    text-decoration: none;

    color: #9f9f9f;

    font-size: 14px;

    transition: .25s ease;

    &:hover {
        color: white;
    }
`;

export const Content = styled.div`
    padding: 28px;

    display: flex;
    flex-direction: column;

    flex: 1;
`;

export const ProjectTitle = styled.h3`
    font-size: 28px;
    margin-bottom: 16px;
`;

export const Description = styled.p`
    color: #9a9a9a;
    line-height: 1.7;
    margin-bottom: 24px;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin-top: auto;
    min-height: 36px;
    gap: 8px;
    @media (max-width: 480px) {
        flex-wrap: wrap;
    }
`;

export const Tag = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    height: 36px;

    padding: 0 12px;

    border-radius: 999px;

    background: rgba(255,255,255,.05);

    font-size: 12px;

    white-space: nowrap;
`;

export const Links = styled.div`
    display: flex;
    gap: 20px;

    margin-top: auto;
    padding-top: 24px;
`;

export const IconButton = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;

    border-radius: 50%;
    border: none;

    background: rgba(255,255,255,.05);

    color: white;

    cursor: pointer;
`;