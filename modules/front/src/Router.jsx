import React from "react";
import {Switch, Route} from "react-router";
import Home from "./templates/Home";

const Router = () => {
    return (
        <Switch>
            <Route exact path="(/)?" component={Home}></Route>
        </Switch>
    );
};

export default Router;