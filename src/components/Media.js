import React from 'react'
// import styled from 'styled-components'
import './Media.sass'

const Media = ({ row }) => {
    return (
        <div className="result">
            <div className=" columns ">
                <div className="column is-1">
                    <figure className="image is-64x64">
                        <img
                            src={row.strDrinkThumb}
                            className=""
                            alt={`${row.strDrink} drink`}
                        />
                    </figure>
                </div>
                <div className={'column'}>
                    <div className={'columns'}>
                        <span className="column has-text-left">
                            <b>{row.strDrink}</b>
                        </span>
                        <span className="column has-text-right is-size-7">
                            <span className="mr-2">{row.strAlcoholic}</span>
                            <span className="mr-2">/</span>
                            <span className="mr-2">{row.strCategory}</span>
                            <span className="mr-2">/</span>
                            <span className="mr-2">{row.strGlass}</span>
                        </span>
                    </div>
                    <p>{row.strInstructions}</p>
                </div>
            </div>
        </div>
    )
}

export default Media
