import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Loading'

const ContentGlasses = ({ title }) => {
    const filters = useSelector((state) => state.filters)
    const [search, setSearch] = useState('')

    if (filters.loading) {
        return <Loading />
    }
    const onSearch = (e) => {
        setSearch(e.target.value)
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
                            className=" is-small button mr-2 mt-3 "
                            key={row.name}
                        >
                            {row.name}
                        </button>
                    )
                })}
        </div>
    )
}

export default ContentGlasses
