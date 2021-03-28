import "bulma/css/bulma.css";
import React from "react";

const Top = () =>{

    return(
        <section className={"hero is-primary has-background-primary-dark is-medium"}>
            <div className={"hero-head"}>
                <nav className={"navbar"}>
                    <div className={"container"}>
                        <div className={"navbar-brand"}>
                            <a className={"navbar-item is-size-5 has-text-weight-bold is-family-sans-serif has-text-white"}>
                                COCKTAIL FINDER
                            </a>
                        </div>
                        <span className="navbar-burger" data-target="navbarMenuHeroA">
                            <span></span>


                          </span>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end">
                                <a className="navbar-item is-active">
                                    Home
                                </a>
                                <span className="navbar-item">
                                  <a className="button">
                                    <span className="icon">
                                      <i className="fas fa-home"></i>
                                    </span>
                                    <span>Github</span>
                                  </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className={"hero-body"}>
                <div className={"container has-text-centered"}>
                    <p className={"title has-text-light"}>
                        Cocktail finder
                    </p>

                    <div className="container is-desktop">
                            <input className={"input is-desktop"}/>
                        </div>

                    <button className={"mt-5 pl-5 pr-5 button is-primary "}>Search</button>
                </div>

            </div>
        </section>
    )
}

export default Top