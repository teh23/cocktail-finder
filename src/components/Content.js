import 'bulma/css/bulma.css'
import React from 'react'

const Content = () => {
    return (
        <div className={'container mt-5'}>
            <div className={'columns is-mobile is-9'}>
                <div className={'column is-3'}>
                    <div className={'tile box'}>
                        <p className={'title'}>test size</p>
                    </div>
                </div>
                <div className={'column is-9'}>
                    <div className={'tile box'}>
                        <p className={'title'}>test second size</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
