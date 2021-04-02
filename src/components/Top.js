import 'bulma/css/bulma.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { searchName } from '../reducers/filtersReducer'

const Top = () => {
    const [search, setSearch] = React.useState('')
    const [active, setActive] = React.useState(false)
    const dispatch = useDispatch()

    const onChange = (e) => {
        setSearch(e.target.value)
        dispatch(searchName(e.target.value))
    }

    const doSearch = (e) => {
        e.preventDefault()
        if (e.type === 'click' || e.which === '13') dispatch(searchName(search))
    }

    const toggleActive = () => {
        setActive(!active)
    }

    return (
        <section
            className={'hero is-primary has-background-primary-dark is-medium'}
        >
            <div className={'hero-head'}>
                <nav className={'navbar'}>
                    <div className={'container'}>
                        <div className={'navbar-brand'}>
                            <a
                                href="#"
                                className={
                                    'navbar-item is-size-5 has-text-weight-bold is-family-sans-serif has-text-white'
                                }
                            >
                                COCKTAIL FINDER
                            </a>
                            <a
                                className={`navbar-burger ${
                                    active ? 'is-active' : ''
                                }`}
                                role="button"
                                onClick={toggleActive}
                                data-target="navbarMenuHeroA"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>

                        <div
                            id="navbarMenuHeroA"
                            className={`navbar-menu pb-0  pt-0 ${
                                active ? 'is-active' : ''
                            }`}
                        >
                            <div className="navbar-end">
                                <a href="#" className="navbar-item is-active">
                                    Home
                                </a>
                                <span className="navbar-item">
                                    <a className="button">
                                        <span className="icon">
                                            <i className="fab fa-github"></i>
                                        </span>
                                        <span>Project</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className={'hero-body-padding-medium mt-6'}>
                <div className={'container has-text-centered'}>
                    <span className="icon">
                        <i className="fas fa-cocktail icon is-large"></i>
                    </span>
                    <span className={'title is-1 has-text-light ml-5'}>
                        Cocktail finder
                    </span>
                    <p className="subtitle mt-3 is-5 has-text-grey-lighter">
                        search your favorite drink recipe
                    </p>
                </div>
                <div className="container has-text-centered mt-5 is-medium">
                    <div className="columns is-centered">
                        <div className="column is-8">
                            <input
                                className={'input'}
                                placeholder={'search by name...'}
                                value={search}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <button
                        className={'mt-5 mb-5 pl-5 pr-5 button is-primary '}
                        onClick={doSearch}
                        onKeyDown={doSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Top
