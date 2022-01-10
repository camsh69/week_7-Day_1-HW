import React from "react";
import ViewMoreLink from "../components/ViewMoreLink";
import ViewReleases from "../components/ViewReleases";

const ReleasesBox = () => {

    return (
        <>
            <h1>Upcoming Film Releases for UK</h1>
            <ViewReleases/>
            <ViewMoreLink/>
        </>
        
    )

}

export default ReleasesBox;