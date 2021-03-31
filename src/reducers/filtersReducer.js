import CocktailFetch from '../service/filtersFetch'

const initialState = {
    categories: '',
    glasses: '',
    ingredients: '',
    alcoholic: '',
    loading: true,
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return action.data
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
                categories: categories.map((row) => ({
                    name: row.strCategory,
                    state: false,
                })),
                glasses: glasses.map((row) => ({
                    name: row.strGlass,
                    state: false,
                })),
                ingredients: ingredients.map((row) => ({
                    name: row.strIngredient1,
                    state: false,
                })),
                alcoholic: alcoholic.map((row) => ({
                    name: row.strAlcoholic,
                    state: false,
                })),
                loading: false,
            },
        })
    }
}

export default filtersReducer
