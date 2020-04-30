import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stories from "./Stories";
import Me from "./Me"
import Work from "./Work"
import Projects from "./Projects"

const Pages = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/Stories">
                    <Stories />
                </Route>
                <Route exact path="/Projects">
                    <Projects />
                </Route>
                <Route exact path="/Me">
                    <Me />
                </Route>
                <Route exact path="/Work">
                    <Work />
                </Route>
            </Switch>
        </Router>
    );
};

export default Pages;