import s from "./table.module.scss"


export function TableRow({accent, date, name, counter, distance}) {
    return (
    <tr className={accent? s.acc_tr : s.tr}> 
    {/* чередование цветов таблицы */}
        <td>{date}</td>
        <td>{name}</td>
        <td>{counter}</td>
        <td>{distance}</td>
    </tr>
    )
}