import { formatCurrentMonth, getCurrentMonth } from '../../helpers/functions';
import * as k from './styles'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth:string) => void;
}

export const SelectedMonth =({currentMonth, onMonthChange}: Props)=>{
    const handlePrevMonth = () =>{
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth(currentDate.getUTCMonth()-1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`);
    }

    const handleNextMonth = () =>{
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth(currentDate.getUTCMonth()+1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`);

    }

    return(
        <k.MonthArea>
        <k.MonthArrow onClick={handlePrevMonth}> <FaArrowAltCircleLeft style={{color:'#fff'}}/> </k.MonthArrow>
        <k.MonthTitle>{formatCurrentMonth(currentMonth)}</k.MonthTitle>
        <k.MonthArrow onClick={handleNextMonth}> <FaArrowAltCircleRight  style={{color:'#fff'}}/> </k.MonthArrow>
    </k.MonthArea>
    )
}