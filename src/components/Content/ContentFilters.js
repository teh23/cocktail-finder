import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Loading'

const ContentFilters = ({ title }) => {
    const filters = useSelector((state) => state.filters)

    if (filters.loading) {
        return <Loading />
    }
    return (
        <div>
            <ul>
                <p>categories</p>
                {filters.categories.map((row) => {
                    return <li key={row.name}>{row.name}</li>
                })}
            </ul>
        </div>
    )
}

export default ContentFilters
