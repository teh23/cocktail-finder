import "bulma/css/bulma.css";
import React from "react";

const Content = () =>{

    return(
        <div className={"container"}>
            <div className={"columns is-mobile is-9" }>
                <div className={"column is-3"}>
                    <div className={"tile box"}>
                        <p className={"title"}>
                            Hej
                        </p>
                    </div>
                </div>
                <div className={"column is-9"}>
                    <div className={"tile box"}>
                        <p className={"title"}>
                            cipcia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content