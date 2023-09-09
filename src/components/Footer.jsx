import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
        Developed by <Link href='https://adarshchavhan.netlify.app'>Adarsh</Link>.
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    padding: 15px;
    text-align: center;
    background-color: ${({theme})=> theme.colors.light};
    color: ${({theme})=> theme.colors.dark};
`;

const Link = styled.a`
    color: ${({theme})=> theme.colors.dark};
    font-weight: 600;
`;

export default Footer