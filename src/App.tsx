import { useState, useEffect } from 'react'
import * as k from './App.styles'
import {Item} from './types/Item'
import {Category} from './types/Category'
import {categories} from './data/categories'
import {items} from './data/items'
import {getCurrentMonth, filterListByMonth} from './helpers/functions'
import Table  from './components/Table'
import {Info} from './components/Info'
import { SelectedMonth } from './components/SelectedMonth'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import {AddItem} from './components/AddItem'

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth]=useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0)

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  },[filteredList])

  const handleMonthChange = (newMonth:string) =>{
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item)=>{
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (

    <k.Container>
      <Navbar />
      <k.Body>

        {/* Área de informações */}
        <Info
         income={income}
         expense={expense}
         />
         {/* Mês selecionado */}
         <SelectedMonth
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
         />

        {/* Área de inserção */}
        <AddItem onAdd={handleAddItem}/>
        {/* Tabela */}
        <Table list={filteredList} /> 

      </k.Body>
      <Footer/>
    </k.Container>

  )
}

export default App
