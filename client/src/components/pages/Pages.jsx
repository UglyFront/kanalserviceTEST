import { useSelector } from "react-redux"
import Page from "./Page"
import s from "./pages.module.scss"





const Pages = () => {
    const allPages = useSelector(state => state.allPages) // получаем массив из доступных странниц





    return (
        <div className={s.wrapper}>
            <div className={s.pages}>
               
                {
                    allPages.map(num => <Page key={num} el={num}/>) // рисуем доступные страницы
                }
            </div>
        </div>
    )
}


export default Pages