import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actions } from "../../redux/actions"
import s from "./pages.module.scss"


const Page = React.memo(function Page({el}) {

    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.page)

    return (
        <div className={currentPage === el ? s.page : s.page__current}  onClick={() => {dispatch(actions.page(el))}}>{el+1}</div>
    )
}) // мемоизируем каждую кнопку страницы во избежание лишних запросов при клике на одну и ту же кнопку


export default Page