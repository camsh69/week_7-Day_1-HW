import React from "react";

const Releases = ({url, children}) => {
    return (
        <>
            <li>
                <a href={url}>{children}</a>
            </li>
            <p></p>
        </>
        
       
    )
}

export default Releases;