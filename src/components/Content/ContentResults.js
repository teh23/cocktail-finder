import { useDispatch, useSelector } from 'react-redux'
import searchFetch from '../../service/searchFetch'
import { searchName } from '../../reducers/filtersReducer'
import Loading from '../Loading'
import React from 'react'

import { toast } from 'bulma-toast'

const ContentResults = ({ title }) => {
    const dispatch = useDispatch()
    const drinks = useSelector((state) => state.filters)

    if (drinks.searchByName.data === '' || drinks.searchByName.data === null) {
        if (drinks.searchByName.data === null) {
            toast({
                message: '<h1>No one know this drink...</h1>',
                type: 'is-danger',
                dismissible: true,
                pauseOnHover: true,
                position: 'top-left',
                animate: { in: 'fadeIn', out: 'fadeOut' },
            })
        }
        return <div></div>
    }
    if (drinks.searchByName.loading) {
        return <Loading />
    }

    return (
        <div>
            {console.log(drinks)}
            <p className={'title'}>{title}</p>

            {drinks.searchByName.data.map((row) => {
                return <div>{row.strDrink}</div>
            })}
        </div>
    )
}

export default ContentResults
