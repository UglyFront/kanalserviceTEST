import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actions } from "../../redux/actions"



const OutLimit = React.memo(function OutLimit({num}) {
    const dispatch = useDispatch()
    const limit = useSelector(state => state.limit)
    
    return (
        <span  onClick={() => dispatch(actions.limit(num))}>{num}</span>
    )
 }) // мемоизируем каждую кнопку списка во избежание лишних запросов при клике на одну и ту же кнопку


export default OutLimit