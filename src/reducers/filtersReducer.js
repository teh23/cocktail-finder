import CocktailFetch from '../service/filtersFetch'
const filtersReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return [...state, action.data]
        default:
            return state
    }
}

export const fetchFilters = () => {
    return async (dispatch) => {
        const categories = await CocktailFetch.getCategories()
        const glasses = await CocktailFetch.getGlasses()
        const ingredients = await CocktailFetch.getIngredients()
        const alcoholic = await CocktailFetch.getAlcoholic()
        dispatch({
            type: 'FETCH_CATEGORIES',
            data: {
                categories: categories.map((row) => row.strCategory),
                glasses: glasses.map((row) => row.strGlass),
                ingredients: ingredients.map((row) => row.strIngredient1),
                alcoholic: alcoholic.map((row) => row.strAlcoholic),
            },
        })
    }
}

export default filtersReducer
