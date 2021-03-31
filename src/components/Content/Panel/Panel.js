import React from 'react'

const Panel = ({ title = '' }) => {
    /*
        Documentation:




    */
    return (
        <nav className="panel">
            <p className="title pl-5  pb-2 pt-5 mb-2">{title}</p>
            <div id="collapsible-panel" className="is-collapsible is-active">
                <div className="panel-block">
                    <p className="control has-icons-left">
                        <input
                            className="input is-small"
                            type="text"
                            placeholder="search"
                            name={'text_asd'}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <p className="panel-tabs">
                    <a className="is-active">all</a>
                    <a>public</a>
                    <a>private</a>
                    <a>sources</a>
                    <a>forks</a>
                </p>
                <a className="panel-block is-active">
                    <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    bulma
                </a>
                <a className="panel-block">
                    <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    marksheet
                </a>
                <a className="panel-block">
                    <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    minireset.css
                </a>
                <a className="panel-block">
                    <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    jgthms.github.io
                </a>
                <a className="panel-block">
                    <span className="panel-icon">
                        <i
                            className="fas fa-code-branch"
                            aria-hidden="true"
                        ></i>
                    </span>
                    daniellowtw/infboard
                </a>
                <a className="panel-block">
                    <span className="panel-icon">
                        <i
                            className="fas fa-code-branch"
                            aria-hidden="true"
                        ></i>
                    </span>
                    mojs
                </a>
                <label className="panel-block"></label>
                <div className="panel-block">
                    <button className="button is-link is-outlined is-fullwidth">
                        reset all filters
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Panel
