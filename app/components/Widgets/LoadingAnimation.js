
import React from "react";

export default
class LoadingMessage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class={"loading-message " + (this.props.visible ? "" : "hidden")}>
                <img src="assets/images/hourglass.svg"/>
                <h5 class="text-muted">{this.props.loadMessage}</h5>
            </div>
        );
    }
}
