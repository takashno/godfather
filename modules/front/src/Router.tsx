import React from "react";
import {Switch, Route} from "react-router";
import Naming from "./components/templates/Naming";
import Library from "./components/templates/Library";
import LibraryRegistration from "./components/templates/LibraryRegistration";
import ErrorPage from './components/templates/ErrorPage'
import Setting from "./components/templates/Setting";

const Router = () => {
    return (
        <Switch>
            <Route exact path="(/)?" component={Naming}></Route>
            <Route exact path="/library" component={Library}></Route>
            <Route exact path="/library/registration" component={LibraryRegistration}></Route>
            <Route exact path="/setting" component={Setting}></Route>
            <Route exact path="/error" component={ErrorPage}></Route>
        </Switch>
    );
};

export default Router;