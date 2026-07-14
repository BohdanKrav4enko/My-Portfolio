import styled from "styled-components";


export const Section = styled.section`

    max-width:1400px;

    margin:0 auto;

    padding:120px 40px;



    @media(max-width:768px){

        padding:80px 20px;
    }
`;



export const Title = styled.h2`

    font-size:clamp(32px,7vw,72px);


    text-align:center;


    margin-bottom:16px;



    @media(max-width:480px){

        font-size:32px;
    }
`;



export const Subtitle = styled.p`

    color:#a8a8a8;


    text-align:center;


    max-width:700px;


    margin:0 auto 64px;


    line-height:1.8;



    @media(max-width:768px){

        margin-bottom:48px;

        font-size:15px;
    }
`;



export const Grid = styled.ul`

    display:flex;


    flex-wrap:wrap;


    justify-content:center;


    gap:20px;


    list-style:none;


    padding:0;

    margin:0;



    @media(max-width:768px){

        gap:16px;
    }
`;



export const Card = styled.li`

    height:64px;


    padding:0 28px;


    display:flex;

    align-items:center;


    gap:12px;


    border-radius:999px;



    background:rgba(255,255,255,.03);


    border:1px solid rgba(255,255,255,.06);



    transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;



    &:hover{

        transform:translateY(-5px);


        border-color:#7c5cff;


        box-shadow:

                0 0 25px rgba(124,92,255,.3);
    }



    svg{

        font-size:22px;

        flex-shrink:0;
    }



    @media(max-width:768px){

        height:56px;


        padding:0 20px;


        font-size:14px;



        svg{

            font-size:18px;
        }
    }



    @media(max-width:480px){

        width:calc(50% - 8px);


        padding:0 16px;


        justify-content:flex-start;


        gap:10px;
    }



    @media(max-width:360px){

        width:100%;
    }
`;
export const Icon = styled.div`

    font-size:42px;

    color:#7c5cff;

    display:flex;

    align-items:center;

    justify-content:center;
`;
export const Name = styled.span`

    color:#fff;

    font-size:16px;

    font-weight:600;
`;