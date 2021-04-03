import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading'
import React, { useEffect } from 'react'

import { toast } from 'bulma-toast'
import Media from '../Media'
import { fetchResults } from '../../reducers/filtersReducer'

/*toast({
    message: '<h1>No one know this drink...</h1>',
    type: 'is-danger',
    dismissible: true,
    pauseOnHover: true,
    position: 'top-left',
    animate: { in: 'fadeIn', out: 'fadeOut' },
})*/

const useContentResults = () => {
    const drinks = useSelector(({ filters }) => {
        console.log(filters)
        return filters
    })

    return drinks
}

const ContentResults = ({ title }) => {
    const drinks = useContentResults()

    if (drinks.searchByName.loading) {
        return <Loading />
    }
    if (drinks.searchByName.data === '' || drinks.searchByName.data === null) {
        if (drinks.data === null) {
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
