

import React from "react";

export default
class NavbarToggle extends React.Component {
    constructor() {
        super();
    }

    handleOnClick() {
        this.props.toggleCollapse();
    }

    render() {
        return (
            <button
                    aria-expanded="false"
                    class="navbar-toggle collapsed"
                    data-target="#bs-example-navbar-collapse-1"
                    data-toggle="collapse"
                    type="button"
                    onClick={this.handleOnClick.bind(this)}>
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        );
    }
}
