import styled from 'styled-components'

export const Container = styled.div`
 background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  

`

export const Logo = styled.h1`
    width: 80px;
    margin-left: 24px;
    color: white;
    position: relative;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 4px;
    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255,255,255,0);
    font-family: 'Lobster', cursive;
    text-decoration: none;
    animation: animate 6s linear infinite;
      @keyframes animate{ 
    0%{
        background-position: -500%;
    }
    100%{
        background-position: 500%;
    }
}
`