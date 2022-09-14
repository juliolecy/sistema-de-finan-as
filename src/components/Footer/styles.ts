import styled from 'styled-components'

export const Container = styled.div`
background-color: #141414;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    bottom: 0;
    width: 100%;
    
`

export const LogoContainer = styled.div`

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

export const RightsContainer = styled.div``

export const RightsQuote = styled.span`
color:#fff;
font-size: 1.4rem;
font-family: 'Playfair Display', serif;
`

export const SocialMediaContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const SMLink = styled.a`
padding: 0 10px;
`