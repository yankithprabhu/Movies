
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";

/*
 * Page Components
 */
import Home             from "./components/Views/Home";
import SearchResults    from "./components/Views/Section/SearchResults";
import TopRated         from "./components/Views/Section/TopRated/TopRated";
import Upcoming         from "./components/Views/Section/Upcoming/Upcoming";
import Watchlist        from "./components/Views/Section/Watchlist/Watchlist";
import MovieDetail      from "./components/Views/Section/MovieDetail/MovieDetail";

/*
 * Poster Redux Store
 */
import Store from "./store";

ReactDOM.render(
    <Provider store={Store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <Route path="search" component={SearchResults}></Route>
                <Route path="top_rated" component={TopRated}></Route>
                <Route path="upcoming" component={Upcoming}></Route>
                <Route path="watchlist" component={Watchlist}></Route>
                <Route path="movie/:movieId" component={MovieDetail}></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('poster-app')
);
