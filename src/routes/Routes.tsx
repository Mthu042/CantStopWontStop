import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Libraries = lazy(() => import(/* webpackChunkName: "Dashboard" */ /* webpackPrefetch: true */ '@pages/Libraries'));
const Authors = lazy(() => import(/* webpackChunkName: "Dashboard" */ /* webpackPrefetch: true */ '@pages/Authors'));

export const Routes: React.FC = () => (
    <Suspense fallback={<span>Loading ...</span>}>
        <Redirect from="/" to="/Libraries" />
        <Switch>
            <Route path="/Libraries" component={Libraries} />
            <Route path="/Authors" component={Authors} />
        </Switch>
    </Suspense>
);
