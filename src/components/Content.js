import 'bulma/css/bulma.css'
import React from 'react'
import ContentFilters from './Content/ContentFilters'
import ContentMain from './Content/ContentMain'

const Content = () => {
    return (
        <div className={'container mt-5'}>
            <div className={'columns is-mobile is-9'}>
                <div className={'column is-3'}>
                    <div className={'tile box'}>
                        <ContentFilters title={'Filters:'} />
                    </div>
                </div>
                <div className={'column is-9'}>
                    <div className={'tile box'}>
                        <ContentMain title={'Cocktails:'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
