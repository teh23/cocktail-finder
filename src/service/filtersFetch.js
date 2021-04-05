import axios from 'axios'
import React from 'react'
const getCategories = async () => {
    const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
    )
    return response.data.drinks
}

const getById = async (id) => {
    const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
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

const getCategoriesByName = async (name) => {
    const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`
    )
    const res = response.data.drinks.map(async (row) => {
        return await getById(row.idDrink)
    })
    const drinks = []

    await Promise.all(res).then((a) => a.map((b) => drinks.push(b[0])))

    return drinks
}
const getGlassesByName = async (name) => {
    const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${name}`
    )
    const res = response.data.drinks.map(async (row) => {
        return await getById(row.idDrink)
    })
    const drinks = []

    await Promise.all(res).then((a) => a.map((b) => drinks.push(b[0])))

    return drinks
}
const getAlcoholicByName = async (name) => {
    const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${name}`
    )
    return response.data.drinks
}

const filtersFetch = {
    getCategories,
    getGlasses,
    getIngredients,
    getAlcoholic,
    getCategoriesByName,
    getGlassesByName,
    getAlcoholicByName,
    getById,
}

export default filtersFetch
