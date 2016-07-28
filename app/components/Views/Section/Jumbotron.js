
import React from "react";

import LoadingMessage from "../../Widgets/LoadingAnimation";

import SearchBox from "./Shared/SearchBox";
import MovieCardList from "./Shared/MovieCardList";

export default
class Jumbotron extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class={"jumbotron " + (this.props.hide ? 'hidden' : '')}>
                <h2>Search for movies!</h2>
                <SearchBox handleSearch={this.props.handleSearch}/>
            </div>
        );
    }
}
