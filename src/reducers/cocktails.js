export const cocktails = (state = [], action) =>{
    switch (action.type){
        case 'FETCH_SUCCESS':
            return[
                ...action.cocktails
            ]
        default:
            return state
    }
}