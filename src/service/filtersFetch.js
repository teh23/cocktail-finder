import axios from 'axios'

const getCategories = async () => {
    const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
    )
    return response.data.drinks
}

const getGlasses = async () => {
    const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`
    )
    return response.data.drinks
}

const getIngredients = async () => {
    const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
    )
    return response.data.drinks
}

const getAlcoholic = async () => {
    const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`
    )
    return response.data.drinks
}

export default { getCategories, getGlasses, getIngredients, getAlcoholic }
