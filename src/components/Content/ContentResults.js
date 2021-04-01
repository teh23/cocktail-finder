import { useDispatch, useSelector } from 'react-redux'
import searchFetch from '../../service/searchFetch'
import { searchName } from '../../reducers/filtersReducer'
import Loading from '../Loading'
import React from 'react'

import { toast } from 'bulma-toast'
import Media from '../Media'

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
        return (
            <div>
                <p className={'title'}>{title}</p>
            </div>
        )
    }
    if (drinks.searchByName.loading) {
        return <Loading />
    }

    return (
        <div>
            <p className={'title'}>{title}</p>

            {drinks.searchByName.data.map((row) => {
                return <Media row={row} />
            })}
        </div>
    )
}

export default ContentResults
