import * as k from './styles'

type Props ={
    title:string;
    value:number;
    color ? : string;
}


export const Resume = ({title, value,color}:Props)=>{
    return( 
        <k.Container>
            <k.Title>{title}</k.Title>
            <k.Info color={color}>R$ {value}</k.Info>
        </k.Container>
    )
} 