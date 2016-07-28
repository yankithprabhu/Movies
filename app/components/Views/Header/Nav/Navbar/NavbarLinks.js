

import React from "react";

import NavbarLinkItem from "./NavbarLinkItem";

export default
class NavbarLinks extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul class="nav navbar-nav">
                <NavbarLinkItem linkTitle="Top 20" linkPath="top_rated"/>
                <NavbarLinkItem linkTitle="Upcoming Movies" linkPath="upcoming"/>
                <NavbarLinkItem linkTitle="Watchlist" linkPath="watchlist"/>
            </ul>
        );
    }
}
