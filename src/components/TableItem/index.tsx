import * as k from './styles'
import {Item} from '../../types/Item'
import {formatDate} from '../../helpers/functions'
import {categories} from '../../data/categories'

type Props ={
    item: Item
}

export const TableItem = ({item}: Props)=>{
    return(
        <k.TableLine>
            <k.TableColumn>{formatDate(item.date)}</k.TableColumn>
            <k.TableColumn>
                <k.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </k.Category>
            </k.TableColumn>
            <k.TableColumn>{item.title}</k.TableColumn>
            <k.TableColumn>
                <k.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </k.Value>
            </k.TableColumn>
        </k.TableLine> 

    )
}