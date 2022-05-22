const db = require("../db")

class Filter {
    async includes(limit, page, filter, value) {
        let arrayItem = await db.query(`SELECT DISTINCT * FROM TZTABLE WHERE name LIKE  '%${value}%' ORDER BY ${filter} OFFSET ${limit * page} LIMIT ${limit};`)
        let allItem = await db.query(`SELECT * FROM TZTABLE WHERE name LIKE '%${value}%';`)
        let count = allItem.rowCount
        let response = arrayItem.rows
        return {
            data: response,
            count: count
        }
    } // фильтрация по подстроке имени

    async equals(limit, page, filter, value) {
        let arrayItem = await db.query(`SELECT * FROM TZTABLE WHERE ${filter} = ${value} ORDER BY ${filter} OFFSET ${limit * page} LIMIT ${limit};`)
        let allItem = await db.query(`SELECT * FROM TZTABLE WHERE ${filter} = ${value};`)
        let count = allItem.rowCount
        let response = arrayItem.rows
        return {
            data: response,
            count: count
        }
    } // фильтрация на равенство значения кол-во/расстояние

    async greater(limit, page, filter, value) {
        let arrayItem = await db.query(`SELECT * FROM TZTABLE WHERE ${filter} > ${value} ORDER BY ${filter} OFFSET ${limit * page} LIMIT ${limit};`)
        let allItem = await db.query(`SELECT * FROM TZTABLE WHERE ${filter} > ${value};`)
        let count = allItem.rowCount
        let response = arrayItem.rows
        return {
            data: response,
            count: count
        }
    } // фильтрация на большее значение кол-во/расстояние

    async less(limit, page, filter, value) {
        let arrayItem = await db.query(`SELECT * FROM TZTABLE WHERE ${filter} < ${value} ORDER BY ${filter} OFFSET ${limit * page} LIMIT ${limit};`)
        let allItem = await db.query(`SELECT * FROM TZTABLE WHERE ${filter} < ${value};`)
        let count = allItem.rowCount
        let response = arrayItem.rows
        return {
            data: response,
            count: count
        }
    }
} // фильтрация на меньшее значение кол-во/расстояние


module.exports = new Filter