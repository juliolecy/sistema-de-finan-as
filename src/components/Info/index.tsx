import * as k from './styles'
import {formatCurrentMonth} from '../../helpers/functions'
import {Resume} from '../Resume'

type Props = {
    income:number;
    expense:number;
}

export const Info = ({income, expense}:Props) =>{


    return(
        <k.Container>
            <k.ResumeArea>
                <Resume title='Receita' value={income}/>
                <Resume title='Despesas' value={expense}/>
                <Resume 
                title='Balanço' 
                value={income-expense}
                color={(income-expense) < 0 ? 'red' : 'green'}
                />
            </k.ResumeArea>
        </k.Container>
    )
}