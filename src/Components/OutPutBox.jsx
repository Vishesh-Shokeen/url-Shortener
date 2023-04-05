import React from "react";

export default function (props) {
    const [bool, setBool] = React.useState(false)

    const copyLink = e => {
        e.target.style.backgroundColor = 'hsl(257, 27%, 26%)'
        setBool(true)
    }



    return (

        <div className="outPutBox">

            <p className="userInput">{props.userInput}</p>
            <hr />
            <p className="shortLink">{props.shortLink}</p>
            <button className="btn copybtn" onClick={copyLink}>{bool ? 'Copied' : 'Copy'}</button>
        </div>
    )
}