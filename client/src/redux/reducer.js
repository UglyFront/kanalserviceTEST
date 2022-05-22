const initState = {
    allElement: 0,
    page: 0,
    limit: 5,
    filter: "name",
    type: 1,
    value: "",
    out: [],
    allPages: []
}



export default function reducer(state = initState, action) {
    switch (action.type) {
        case "LIMIT": 

            return {...state, limit:  +action.payload, page: 0}



        case "PAGE": 
            return {...state, page: +action.payload}
          


        case "FILTER":
                if (action.payload == "name") {
                    return {...state, filter: action.payload, value: "",type: 1, page: 0}
                } 
                return {...state, filter: action.payload, page: 0, type: 2, value: ""}
               

            

        case "TYPE":
            if (state.filter === "name") {
                return {...state, type: action.payload, page: 0, value: ""}
            }
            return {...state, type: action.payload, page: 0}
          

        case "VALUE":

            return {...state, value: action.payload, page: 0}
            

        

        case "DATA": 
            let {out, count} = action.payload
            let allPages = Math.ceil(count / state.limit) // получаем масималбно возможное чисто страниц  исходя из пришедших данных и длинны массива данных
            let pagesArr = []
            for (let i = 0; i < allPages; i++) {
                let page = i
                pagesArr.push(page++)
            } // приводим страницы в формат [1,2,3,4...]
            return {...state, out: out, allElement: count, allPages: pagesArr}


        default: return state
    }
}