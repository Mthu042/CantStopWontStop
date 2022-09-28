import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Libraries = lazy(() => import(/* webpackChunkName: "Dashboard" */ /* webpackPrefetch: true */ '@pages/Libraries'));

export const Routes: React.FC = () => (
    <Suspense fallback={<span>Loading ...</span>}>
        <Switch>
            <Route exact path="/" component={Libraries} />
        </Switch>
    </Suspense>
);
