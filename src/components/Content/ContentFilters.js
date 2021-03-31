import React from 'react'
import { useSelector } from 'react-redux'

const ContentFilters = ({ title }) => {
    const filters = useSelector((state) => state.filters)
    console.log(filters)
    return (
        <div>
            <p className={'title'}>{title}</p>
        </div>
    )
}

export default ContentFilters
