import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading'
import React, { useEffect } from 'react'

import { toast } from 'bulma-toast'
import Media from '../Media'

const ContentResults = ({ title }) => {
    const drinks = useSelector(({ filters }) => {
        if (filters.searchByName.data.length > 0) {
            if (filters.filters.categories !== '') {
                return {
                    data: filters.searchByName.data.filter(
                        (row) => row.strCategory === filters.filters.categories
                    ),
                    loading: false,
                }
            }
        }
        return filters.searchByName
    })

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(drinks)
        /*if (drinks.searchByName.data.length > 0) {
            if (drinks.filters.categories !== '') {
                drinks.searchByName.data.filter(
                    (row) => row.strCategory === drinks.filters.categories
                )
            }
        }*/
    }, [drinks])

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
    if (drinks.loading) {
        return <Loading />
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
