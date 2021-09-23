import React from "react";
import {Switch, Route} from "react-router";
import Naming from "./templates/Naming";
import Library from "./templates/Library";
import Setting from "./templates/Setting";

const Router = () => {
    return (
        <Switch>
            <Route exact path="(/)?" component={Naming}></Route>
            <Route exact path="/library" component={Library}></Route>
            <Route exact path="/setting" component={Setting}></Route>
        </Switch>
    );
};

export default Router;