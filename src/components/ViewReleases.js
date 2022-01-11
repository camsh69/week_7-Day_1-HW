import React from "react";
import Releases from './Releases'

const ViewReleases = ({links}) => {

    const releaseNodes = links.map(link => {
        return (
                <Releases url={link.url}>{link.name}</Releases>
        )
    })
        
   return (
       <>
           <ul>
           {releaseNodes}
           </ul>
       </>
       
   )        
    }

export default ViewReleases;