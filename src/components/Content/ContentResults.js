import { useSelector } from 'react-redux'
import Loading from '../Loading'
import React from 'react'

import { toast } from 'bulma-toast'
import Media from '../Media'

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
        if (
            filters.filters.categories.length > 0 ||
            filters.filters.glasses.length > 0 ||
            filters.filters.alcoholic.length > 0
        ) {
            if (filters.searchByName.string.length > 0) {
                return {
                    loading: false,
                    data: filters.results.filter((row) => {
                        return row.strDrink
                            .toLowerCase()
                            .includes(filters.searchByName.string.toLowerCase())
                    }),
                }
            }
            return {
                loading: false,
                data: filters.results,
            }
        }
        if (filters.searchByName.string.length > 0) {
            return {
                loading: false,
                data: filters.searchByName.data,
            }
        }

        return {
            loading: true,
            data: filters.results,
        }
    })

    return drinks
}

const ContentResults = ({ title }) => {
    const drinks = useContentResults()
    console.log(drinks)
    if (drinks.loading) {
        return <Loading />
    }
    if (drinks.data === '' || drinks.data === null) {
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

            {drinks.data.map((row) => {
                return <Media row={row} />
            })}
        </div>
    )
}

export default ContentResults
