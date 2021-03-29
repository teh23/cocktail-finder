import "bulma/css/bulma.css";
import React, {useEffect} from "react";
import axios from "axios";
import Results from "./Content/Results";
import Filters from "./Content/Filters";

const Content = () =>{

   /* useEffect( () =>{
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
            .then(res =>{
                console.log(res.data)
            })
    }, [])*/

    return(
        <div className={"container mt-5"}>
            <div className={"columns is-mobile is-9" }>
                <div className={"column is-3"}>
                    <div className={"tile box"}>
                        <p className={"title"}>
                            <Filters />
                        </p>
                    </div>
                </div>
                <div className={"column is-9"}>
                    <div className={"tile box"}>
                        <p className={"title"}>
                            <Results />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content