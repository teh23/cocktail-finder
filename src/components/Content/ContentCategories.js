import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Loading'
import bulmaCollapsible from '@creativebulma/bulma-collapsible'
import Panel from './Panel/Panel'

const ContentCategories = ({ title }) => {
    const filters = useSelector((state) => state.filters)

    if (filters.loading) {
        return <Loading />
    }

    return (
        <div>
            <p className={'title'}>{title}</p>

            {filters.categories.map((row) => {
                return (
                    <button
                        className="is-small button mr-2 mt-3"
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
{
}

export default ContentCategories
