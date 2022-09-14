import * as k from './styles'
import {Item} from '../../types/Item'
import { TableItem } from '../TableItem'

type Props = {
    list: Item[]
}
 
 const Table = ({list}: Props) =>{
    return(
    <k.Table>
        <thead>
            <tr>
                <k.TableHeadColumn width={100}>Data</k.TableHeadColumn>
                <k.TableHeadColumn width={130}>Categoria</k.TableHeadColumn>
                <k.TableHeadColumn>Titulo</k.TableHeadColumn>
                <k.TableHeadColumn width={150}>Valor</k.TableHeadColumn>
            </tr>
        </thead>

        <tbody>
            {list.map( (item, index) => (
                <TableItem key={index} item={item}/>
            ))}

        </tbody>
    </k.Table>
    )
}

export default Table