

import React from "react";
import { Link } from "react-router";

export default
class NavbarLinkItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li>
                <Link to={this.props.linkPath} activeClassName="active">{this.props.linkTitle}</Link>
            </li>
        );
    }
}
