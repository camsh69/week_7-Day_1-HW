import React from "react";

const Releases = ({url, name}) => {
    return (
        <>
            <li>
                <a href={url}>{name}</a>
            </li>
            <p></p>
        </>
        
       
    )
}

export default Releases;