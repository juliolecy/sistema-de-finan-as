import styled from 'styled-components'

export const Container = styled.div`
background-color: #fff;
box-shadow: 0 0 5px #000;
border-radius: 5px;
padding: 20px;
margin-top: 20px;

display: flex;
flex-direction: row;
align-items: center;
width: 90%;

`
export const DataContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 15px;
`
export const DataLabel = styled.label`
font-weight: bold;
`
export const Data = styled.input`
padding:10px;
border-radius: 15px;
font-size:14px;
border: 1px solid #000;
`
export const CategoryContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 15px;
`
export const CategoryLabel = styled.label`
font-weight: bold;
`
export const Category = styled.select``

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 15px;
`
export const TitleLabel = styled.label`
font-weight: bold;
`
export const Title = styled.input``

export const ValueContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px 15px;
`

export const ValueLabel = styled.label`
font-weight: bold;
`
export const Value = styled.input``

export const Button = styled.button`
margin-left:30px;
background: darkblue;
font-size: 15px;
color: #fff;
border-radius: 25px;
padding: 15px;
border: 1px solid darkblue;
transition: .5s;

&:hover{
    color: #999;
    cursor: pointer;
}
`