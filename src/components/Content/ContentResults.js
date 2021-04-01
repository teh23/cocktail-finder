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
            {console.log(drinks.searchByName.data)}
            <p className={'title'}>{title}</p>

            {drinks.searchByName.data.map((row) => {
                return (
                    <div className="box">
                        <div className="card-content columns">
                            <div className="column is-3">
                                <figure className="image is-128x128">
                                    <img
                                        src={row.strDrinkThumb}
                                        className="is-small"
                                    />
                                </figure>
                            </div>
                            <div className={'column'}>
                                <p className={'title'}>{row.strDrink}</p>
                                <p>{row.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ContentResults
