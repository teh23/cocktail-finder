import 'bulma/css/bulma.css'
import React from 'react'
import ContentCategories from './Content/ContentCategories'
import ContentGlasses from './Content/ContentGlasses'
import ContentResults from './Content/ContentResults'

const Content = () => {
    return (
        <div className={'container mt-5'}>
            <div className={'columns is-9'}>
                <div className={'column is-3'}>
                    <div className="content-box">
                        <ContentCategories title={'Categories:'} />
                    </div>
                    <div className={'content-box'}>
                        <ContentGlasses title={'Glasses:'} />
                    </div>
                </div>
                <div className={'column is-9'}>
                    <div className="content-box">
                        <ContentResults title={'Results:'} />
                    </div>
                </div>
            </div>
            <div className={'column is-12'}></div>
        </div>
    )
}

export default Content
