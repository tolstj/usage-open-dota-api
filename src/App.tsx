import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import { Header } from './Header';
import { firstHeaderRoute, routes } from './routes';

export function App() {
    return (
        <Router>
            <Route exact path="/">
                <Redirect to={firstHeaderRoute.route} />
            </Route>

            <Header />

            <Switch>
                <Switch>
                    {routes.map(({ route, component }) => (
                        <Route path={route}>
                            {component}
                        </Route>
                    ))}
                </Switch>
            </Switch>
        </Router>
    );
}
