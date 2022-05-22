import { useSelector } from "react-redux"
import s from "./table.module.scss"
import { TableRow } from "./TableRow"

const Table = () => {
    const out = useSelector(state => state.out) // получаем данные для таблицы
    return (
   <>
     {!out.length ? // проверка на наличие данных таблицы
            <h1>Пусто...</h1>
        :
        <table className={s.table}>
         
            <tr className={s.tr}>
                <th>Дата: </th>
                <th>Название: </th>
                <th>Количество: </th>
                <th>Расстояние: </th>
            </tr>
            {out.map((el,i) => <TableRow key={el.id} accent = {i % 2 === 0 ? true:false} name={el.name} date={el.datecurrent} counter={el.counter} distance={el.distance}/>)} 
            {/* рисуем таблицу */}
        </table>
        }
   </>
    )
}


export default Table