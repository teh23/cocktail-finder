import React from 'react'
// import styled from 'styled-components'
import './Media.sass'

const Media = ({ row }) => {
    return (
        <article className="media result">
            <figure className="media-left image is-128x128">
                <img
                    src={row.strDrinkThumb}
                    className=""
                    alt={`${row.strImageAttribution}`}
                />
            </figure>
            <div className={'column'}>
                <div className={'columns'}>
                    <span className="column has-text-left">
                        <b>{row.strDrink}</b>
                    </span>
                    <span className="ml-3 has-text-right is-size-7">
                        <span className="mr-2">{row.strAlcoholic}</span>
                        <span className="mr-2">/</span>
                        <span className="mr-2">{row.strCategory}</span>
                        <span className="mr-2">/</span>
                        <span className="mr-2">{row.strGlass}</span>
                    </span>
                </div>
                <p>{row.strInstructions}</p>
                <br/>
                    <small>{[...Array(15).keys()]
                        .map(key => ++key)
                        .map((number) => {
                            const ingredient = row[`strIngredient${number}`]
                            const measure = row[`strMeasure${number}`]
                            if (ingredient !== null)
                                return(

                                    <div className="mb-1"><b>{`${number}:`}</b> {`${ingredient}`} <i>{`${measure}`}</i></div>

                                )
                            return ''
                        })}</small>
            </div>

        </article>
    )
}

export default Media
