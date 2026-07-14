import styled from "styled-components";


interface TagProps {
    color: string;
}


export const Section = styled.section`

    max-width:1400px;

    margin:0 auto;

    padding:120px 40px;



    @media(max-width:768px){

        padding:80px 20px;
    }
`;



export const Badge = styled.div`

    width:fit-content;


    display:flex;

    align-items:center;

    gap:8px;


    margin-bottom:20px;


    padding:10px 18px;


    border-radius:999px;


    background:rgba(0,212,255,.08);


    border:1px solid rgba(0,212,255,.15);


    color:#00d4ff;


    font-size:13px;

    font-weight:600;

    letter-spacing:1px;

    text-transform:uppercase;



    backdrop-filter:blur(10px);



    svg{

        font-size:12px;
    }
`;



export const Header = styled.div`

    display:flex;

    justify-content:space-between;

    align-items:end;


    gap:40px;


    margin-bottom:64px;



    @media(max-width:768px){

        flex-direction:column;

        align-items:flex-start;
    }
`;



export const Title = styled.h2`

    font-size:clamp(32px,7vw,72px);



    span{

        background:linear-gradient(
                135deg,
                #00d4ff,
                #7c5cff
        );


        -webkit-background-clip:text;

        -webkit-text-fill-color:transparent;
    }
`;



export const Subtitle = styled.p`

    color:#8d8d8d;

    margin-top:20px;
`;



export const ViewAll = styled.a`

    display:flex;

    align-items:center;


    color:white;


    text-decoration:none;


    font-size:16px;


    cursor:pointer;


    position:relative;


    padding-bottom:6px;



    &::after{

        content:"";


        position:absolute;

        bottom:0;

        left:0;


        width:0;

        height:2px;


        background:linear-gradient(
                135deg,
                #00d4ff,
                #7c5cff
        );


        transition:.3s;
    }



    &:hover::after{

        width:100%;
    }



    &:focus-visible{

        outline:2px solid #00d4ff;

        outline-offset:6px;

        border-radius:4px;
    }
`;



export const Grid = styled.ul`

    display:grid;


    grid-template-columns:repeat(3,1fr);


    gap:24px;


    list-style:none;


    padding:0;

    margin:0;



    @media(max-width:1100px){

        grid-template-columns:repeat(2,1fr);
    }



    @media(max-width:768px){

        grid-template-columns:1fr;
    }
`;



export const Card = styled.article`

    display:flex;

    flex-direction:column;


    background:rgba(255,255,255,.03);


    border:1px solid rgba(255,255,255,.06);


    border-radius:28px;


    overflow:hidden;


    transition:.3s;



    &:hover{

        transform:translateY(-10px);

        border-color:#7c5cff;
    }



    &:hover img{

        transform:scale(1.05);
    }
`;



export const Image = styled.img`

    width:100%;


    aspect-ratio:16 / 9;


    display:block;


    object-fit:cover;


    object-position:top;



    transition:.3s;
`;



export const Link = styled.a`

    display:flex;

    align-items:center;

    gap:8px;


    color:#9f9f9f;


    text-decoration:none;


    font-size:14px;


    transition:.25s;



    &:hover{

        color:white;
    }



    &:focus-visible{

        outline:2px solid #00d4ff;

        outline-offset:5px;

        border-radius:4px;
    }
`;



export const Content = styled.div`

    padding:28px;


    display:flex;

    flex-direction:column;


    flex:1;
`;



export const ProjectTitle = styled.h3`

    font-size:28px;

    margin-bottom:16px;
`;



export const Description = styled.p`

    color:#9a9a9a;


    line-height:1.7;


    margin-bottom:24px;
`;



export const Tags = styled.ul`

    display:flex;


    flex-wrap:wrap;


    gap:8px;


    padding:0;

    margin:0;


    list-style:none;


    min-height:36px;
`;



export const Tag = styled.li<TagProps>`

    display:flex;

    align-items:center;

    justify-content:center;


    height:36px;


    padding:0 12px;


    border-radius:999px;


    background:${({color})=>color};


    font-size:12px;


    white-space:nowrap;
`;



export const Links = styled.div`

    display:flex;


    gap:20px;


    margin-top:auto;


    padding-top:24px;
`;