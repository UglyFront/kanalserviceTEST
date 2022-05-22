const db = require("../db")
const {includes, equals, less, greater} = require("../filter/filter")


class controllersTable {
    async getItem(req, res) {    
        let {limit, page, filter, type, value} = req.query // деструктуризируем объект параметров
        type = +type // приводим тип к числу



        if (!limit || !page) {
            res.status(400).json("Что-то пошло не так")
        } // если нет параметров лимит или пейдж отдаем ошибку


            else if (!value) {
                    let arrayItem = await db.query(`SELECT * FROM TZTABLE OFFSET ${limit * page} LIMIT ${limit};`)
                    let allItem = await db.query(`SELECT * FROM TZTABLE;`)
                    let count = allItem.rowCount
                    let response = arrayItem.rows
                    console.log(response)
                    res.status(200).json({data: response, count: count})
            } // при смене категории значение не отправляем, значит отдаем просто таблицу с пагинацией


        else {  

            // CASE:
            // 1 - содержит
            // 2 - равно
            // 3 - больше
            // 4 - меньше
            
            switch (type) {
                case 1: 
                    {   
                        let responseFilter = await includes(limit, page, filter, String(value)) // содержит
                        res.status(200).json(responseFilter)

                        break;
                    }
                case 2:
                   {    
                        let responseFilter = await equals(limit, page, filter, +value) // равно
                        res.status(200).json(responseFilter)
               
                    
                        break;
                   }
                case 3:
                    {
                        let responseFilter = await greater(limit, page, filter, +value) // больше
                        res.status(200).json(responseFilter)

                        break;
                    }
        
                case 4:
                    {
                            let responseFilter = await less(limit, page, filter, +value) // меньше
                            res.status(200).json(responseFilter)

                            break;
                    }
            default: res.status(400).json("TOTAL WARNING!")
            }
        }
    }
}



module.exports = new controllersTable