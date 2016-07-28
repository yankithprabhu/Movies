
import React from "react";

import Nav from "./Nav/Nav";

export default
class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <header class="poster-header">
                <Nav/>
            </header>
        );
    }
}
