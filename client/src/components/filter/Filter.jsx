import OutLimit from "./OutLimit"
import React, {useState} from "react"
import { useSelector } from "react-redux"
import s from "./fliter.module.scss"
import { actions } from "../../redux/actions"
import { useDispatch } from "react-redux"

const limits = [5, 10, 15] // вывод возможных лимитов под пагинацию

const Filter = () => {
    const limit = useSelector(state => state.limit)
    const filter = useSelector(state => state.filter)
    const type = useSelector(state => state.type)
    const value = useSelector(state => state.value)
    // получаем данные из стора
    const dispatch = useDispatch()




    return (
        <section className={s.section}>
           <div className={s.wrapper}>
               <p className={s.filter__name}>Вывод на странице: <span>{limit}</span>
                    <br />
                    {limits.map(el => <OutLimit key = {el} num={el}/>)} 
                    {/* рисуем лимиты пагинации */}
               </p>

               <div className={s.filter__name}>
                   <p>Сортировать по:    

                       <select onChange={(e) => {dispatch(actions.filter(e.target.value))}}>Тип 
                           <option value="name">Названию</option>
                           <option value="counter">Количеству</option>
                           <option value="distance">Расстоянию</option>
                       </select>
                        {/* изменения списка отдаем в стор */}


                       <select onChange={(e) => {dispatch(actions.type(e.target.value))}} value={type}>
                           {filter === "name" ?
                           <>
                            <option value="1">Содержит</option>
                           </> // фильтрация содержит доступна только при сортировке по имени
                            
                           : 
                           filter !== "name" ?
                           <>
                            <option value="2">Равно</option>
                            <option value="3">Больше</option>
                            <option value="4">Меньше</option>
                           </> 
                           :
                           <></>
                           }
                
                       </select>
                       {/* изменения списка отдаем в стор */}
                           
                       {filter === "name" ?
                       
                       <input type="text" placeholder="Значение" onChange={(e) => {dispatch(actions.value(e.target.value)); dispatch(actions.page(0))}} value={value}/> // текстовый инпут доступен только при сортировке по имени
                        :
                        <input type="number" placeholder="Значение" onChange={(e) => {dispatch(actions.value(e.target.value)); dispatch(actions.page(0))}} value={value}/>  // в остальных случаях используем числовой
                        }


                    </p>
                   
               </div>
           </div>
        </section>
    )
}


export default Filter