import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading'
import { fetchResults, toggleState } from '../../reducers/filtersReducer'

const ContentCategories = ({ title }) => {
    const dispatch = useDispatch()
    const filters = useSelector((state) => state.filters)

    const toggleActive = (name) => {
        dispatch(toggleState({ type: 'categories', name: name }))
        dispatch(fetchResults('categories', name))
    }
    if (filters.loading) {
        return <Loading />
    }

    return (
        <div>
            <p className={'title'}>{title}</p>

            {filters.categories.map((row) => {
                return (
                    <button
                        className={`is-small is-primary button mr-2 mt-3 ${
                            row.state ? 'is-active' : ''
                        }`}
                        onClick={() => toggleActive(row.name)}
                        key={row.name}
                    >
                        {row.name}
                    </button>
                )
            })}

            {/*<Panel title={title} />*/}
        </div>
    )
}

export default ContentCategories
