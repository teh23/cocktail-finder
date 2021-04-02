import CocktailFetch from '../service/filtersFetch'
import SearchFetch from '../service/searchFetch'

const initialState = {
    categories: '',
    glasses: '',
    ingredients: '',
    alcoholic: '',
    searchByName: {
        data: '',
        loading: true,
    },
    loading: true,
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return {
                ...state,
                categories: action.data.categories,
                alcoholic: action.data.alcoholic,
                glasses: action.data.glasses,
                ingredients: action.data.ingredients,
                loading: action.data.loading,
            }
        case 'FETCH_SEARCH':
            return { ...state, searchByName: action.data }
        default:
            return state
    }
}

export const searchName = (name) => {
    return async (dispatch) => {
        const result = await SearchFetch.searchByName(name)
        dispatch({
            type: 'FETCH_SEARCH',
            data: {
                data: result,
                loading: false,
            },
        })
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
