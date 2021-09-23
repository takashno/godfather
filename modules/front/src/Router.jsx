import React from "react";
import {Switch, Route} from "react-router";
import Naming from "./templates/Naming";

const Router = () => {
    return (
        <Switch>
            <Route exact path="(/)?" component={Naming}></Route>
        </Switch>
    );
};

export default Router;