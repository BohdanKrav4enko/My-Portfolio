import styled from "styled-components";


export const Wrapper = styled.div`
    position: relative;
`;


export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;

    padding: 0;

    background: transparent;
    border: none;

    color: #aaa;

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;

    transition: color .25s ease;


    &:hover {
        color: white;
    }
`;


export const Arrow = styled.span<{open:boolean}>`
    display: flex;
    align-items: center;

    font-size: 12px;

    transition: transform .25s ease;

    transform: rotate(
            ${({open}) => open ? "180deg" : "0"}
    );
`;



export const Dropdown = styled.div`
    position: absolute;

    top: 34px;
    left: 50%;

    transform: translateX(-50%);

    width: 120px;

    padding: 6px;

    display: flex;
    flex-direction: column;
    gap: 4px;

    background: rgba(20,20,30,.95);

    backdrop-filter: blur(15px);

    border: 1px solid rgba(255,255,255,.08);

    border-radius: 16px;

    box-shadow:
            0 20px 40px rgba(0,0,0,.35);

    z-index: 100;
`;



export const Item = styled.button<{ active?: boolean }>`
    height: 34px;

    display: flex;
    align-items: center;

    padding: 0 10px;

    border: none;
    border-radius: 10px;

    background: ${({ active }) =>
            active
                    ? "rgba(124,92,255,.15)"
                    : "transparent"
    };

    color: ${({ active }) =>
            active
                    ? "#7c5cff"
                    : "#aaa"
    };

    font-size: 14px;
    font-weight: 500;

    cursor: pointer;

    transition:
            background .2s ease,
            color .2s ease;


    &:hover {
        background: rgba(124,92,255,.15);
        color: white;
    }
`;