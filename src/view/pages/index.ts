// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Registration = lazy(() => import(/* webpackChunkName: "Registration" */ './Registration'));
