import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Topbar = ({query, setQuery, handleKeyDown}) => {
    const {user} = useSelector(state => state.user);
    
    return (
      <StyledTopbar>
                <Logo>
                    <img src='/favicon.svg'/>
                    <span>Punk Shop</span>
                </Logo>

            <Greet>Hi, {user.name}</Greet>
          <Heading>Find Your Taste!</Heading>
  
          <SearchBar>
              <Input type='text' placeholder='Enter taste...' value={query} onChange={e => setQuery(e.target.value)} onKeyDown={handleKeyDown}/>
          </SearchBar>
      </StyledTopbar>
    )
  }  

const StyledTopbar = styled.div`
    width: 100%;
    background: ${({theme})=> theme.colors.white};
    text-align: center;
    padding: 100px 0 50px 0;
`;

const Logo = styled.div`
    margin: 15px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

    > img{
        width: 30px;
        aspect-ratio: 1/1;
    }

    > span{
        color: ${({theme})=> theme.colors.dark};
        font-size: 14px;
        font-weight: 800;
        font-family: 'Montserrat', sans-serif;
        position: relative;
        top: 5px;
    }
`;

const Greet = styled.p`
    font-size: 14px;
    font-weight: 500;
    opacity: .5;
    margin-bottom: 5px;
`;

const Heading = styled.h1`
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    color: ${({theme})=> theme.colors.dark};
    text-transform: uppercase;
    margin-bottom: 10px;
`;

const SearchBar = styled.div`
    width: 100%;
    padding: 15px;
`;

const Input = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 15px;
    border: 1px solid ${({theme})=> theme.colors.shadow};
    border-radius: 30px;
    color: ${({theme})=> theme.colors.dark};
`;

export default Topbar