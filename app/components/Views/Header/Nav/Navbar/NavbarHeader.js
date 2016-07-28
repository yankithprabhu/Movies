

import React from "react";

import NavbarToggle from "./NavbarToggle";
import NavbarBrand from "./NavbarBrand";

export default
class NavbarHeader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="navbar-header">
                <NavbarToggle toggleCollapse={this.props.toggleCollapse}/>
                <NavbarBrand/>
            </div>
        );
    }
}
