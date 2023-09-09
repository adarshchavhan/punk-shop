import React from 'react'
import styled from 'styled-components'


const BearCard = ({bear}) => {
  return (
    <Card>
        <Image src={bear.image_url? bear.image_url : '/favicon.svg'} alt='bear_image'/>
        <Name>{bear.name}</Name>
        <Tagline>{bear.tagline}</Tagline>
    </Card>
  )
}

const Card = styled.div`
    width: 100%;
    max-width: 300px;
    padding: 15px;
    background: ${({theme})=> theme.colors.light};
    text-align: center;
    border-radius: 5px;
    transition: all .2s ease-in-out;
    &:hover{
        transform: translateY(-5px);
        >img{
            filter: drop-shadow(0 5px 15px rgba(0,0,0,.4));
        }
    }
`;

const Image = styled.img`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
    padding: 15px;
    filter: drop-shadow(0 5px 5px rgba(0,0,0,.2));
    transition: all .2s linear;
`;

const Name = styled.h3`
    color: ${({theme})=> theme.colors.dark};
    font-family: 'Kanit', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 120%;
`;

const Tagline = styled.p`
    color: ${({theme})=> theme.colors.dark};
    font-size: 13px;
    font-weight: 500;
    line-height: 120%;
    opacity: .5;
    padding: 2px 0 20px 0;
`;

export default BearCard