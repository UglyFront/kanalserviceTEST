import {ADRESS} from "../ADRESS"

class Actions {
    limit(number) {
        return {
            type: "LIMIT",
            payload: number
        }
    }


    filter(value) {
        return {
            type: "FILTER",
            payload: value
        }
    }

    type(value) {
        return {
            type: "TYPE",
            payload: value
        }
    }


    value(value) {
        return {
            type: "VALUE",
            payload: value
        }
    }


    page(number) {
        return {
            type: "PAGE",
            payload: number
        }
    }



    getData(limit, page, filter, type, value) {
        // console.log(`page=${page}&limit=${limit}&filter=${filter}&type=${type}&value=${value}`)
        return dispatch => {
            
            
                fetch(`${ADRESS}/api/table?page=${page}&limit=${limit}&filter=${filter}&type=${type}&value=${value}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    dispatch({
                    type: "DATA",
                    payload: {
                        count: data.count,
                        out: data.data
                    }
                })})
           
            }

            
        } // универсальный запрос на получение данных
}



export const actions = new Actions


