import axios from 'axios'

const searchByName = async (name) => {
    const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    )
    return response.data.drinks
}
export default { searchByName }
