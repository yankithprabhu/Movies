

import React from "react";
import { IndexLink } from "react-router";

export default
class NavbarBrand extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <IndexLink class="navbar-brand" to="/">Movie-list</IndexLink>
        );
    }
}
