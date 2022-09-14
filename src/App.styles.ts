import styled from 'styled-components'
import img from './assets/img1.jpg'

export const Container = styled.div`
background-image: url(${img});
background-size: cover;
    background-position: center;
    background-repeat: repeat-y;

`
export const Header = styled.div`
background-color: darkblue;
height: 150px;
text-align: center;
`

export const HeaderText = styled.h1`
margin: 0;
padding:0;
color: #FFF;
padding-top: 30px;
`

export const Body = styled.div`
margin: auto;
max-width: 980px;
margin-bottom: 30px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`


