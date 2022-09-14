import * as k from './styles'
import {Item} from '../../types/Item'
import { categories } from '../../data/categories'
import { useState } from 'react'

type Props = {
    onAdd: (item: Item) => void
}

export const AddItem = ({onAdd}:Props) =>{

    const newDateAdjusted = (dateField: string) => {
        let [year, month, day] = dateField.split('-')
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
      }



      const [date, setDate] = useState('')
      const [category, setCategory] = useState('')
      const [title, setTitle] = useState('')
      const [valueX, setValueX] = useState(0)
      let categoryKeys: string[] = Object.keys(categories);
      
      const Add = () => {
          let err: string[] = [];
          
        if(isNaN(new Date(date).getTime())) {
          err.push('Data inválida!');
        }
        if(!categoryKeys.includes(category)) {
          err.push('Categoria inválida!');
        }
        if(title === '') {
          err.push('Título vazio!');
        }
        if(valueX <= 0) {
          err.push('Valor inválido!');
        }
    
        if(err.length > 0) {
          alert(err.join("\n"));
        } else {
          onAdd({
            date: newDateAdjusted(date),
            category: category,
            title: title,
            value: valueX
          });
          clearFields();
        }
      }
    
      const clearFields = () => {
        setDate('');
        setCategory('');
        setTitle('');
        setValueX(0);
      }

    return(
        <k.Container>

            <k.DataContainer>
                <k.DataLabel>Data</k.DataLabel>
                <k.Data type="date" value={date} onChange={e=> setDate(e.target.value)}/> 
            </k.DataContainer>
       

            <k.CategoryContainer>
                <k.CategoryLabel>Categoria</k.CategoryLabel>
                <k.Category value={category} onChange={e => setCategory(e.target.value)}>
                    <option></option>
                {categoryKeys.map((key, index) => (
                    <option key={index} value={key}>{categories[key].title}</option>
                  ))}
                </k.Category>
            </k.CategoryContainer>

            <k.TitleContainer>
                <k.TitleLabel>Título</k.TitleLabel>
                <k.Title type="text" value={title} onChange={e=> setTitle(e.target.value)}/>
            </k.TitleContainer>

                
            <k.ValueContainer>
                <k.ValueLabel>Valor</k.ValueLabel>
                <k.Value placeholder='Valor' type="number" value={valueX} onChange={e=>setValueX(parseInt(e.target.value))}/>
                
            </k.ValueContainer>

            <k.Button onClick={Add}>Adicionar</k.Button>

          
        </k.Container>
    )
}