import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading'
import { fetchResults, toggleState } from '../../reducers/filtersReducer'

const ContentGlasses = ({ title }) => {
    const dispatch = useDispatch()
    const filters = useSelector((state) => state.filters)
    const [search, setSearch] = useState('')

    if (filters.loading) {
        return <Loading />
    }
    const onSearch = (e) => {
        setSearch(e.target.value)
    }
    const toggleActive = (name) => {
        dispatch(toggleState({ type: 'glasses', name: name }))
        dispatch(fetchResults('glasses', name))
    }
    return (
        <div>
            <p className={'title'}>{title}</p>
            <input
                className="input"
                onChange={onSearch}
                value={search}
                placeholder={'search..'}
            />
            {filters.glasses
                .filter((row) => {
                    return search === ''
                        ? row.name
                        : row.name.toLowerCase().includes(search.toLowerCase())
                })
                .map((row) => {
                    return (
                        <button
                            className={`is-primary is-small button mr-2 mt-3 ${
                                row.state ? 'is-active' : ''
                            }`}
                            key={row.name}
                            onClick={() => toggleActive(row.name)}
                        >
                            {row.name}
                        </button>
                    )
                })}
        </div>
    )
}

export default ContentGlasses
