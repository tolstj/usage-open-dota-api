import React from 'react';
import { Heroes } from './components/Heroes';

interface Route {
    name?: string;
    route: string;
    component: React.FC;
}

export const headerRoutes: Route[] = [
    {
        name: 'Герои',
        route: '/heroes',
        component: Heroes,
    },
    {
        name: 'Профессионалы',
        route: '/pro',
        component: Heroes,
    },
    {
        name: 'Команды',
        route: '/teams',
        component: Heroes,
    },
];

export const firstHeaderRoute: Route = headerRoutes[0];

export const routes: Route[] = [
    ...headerRoutes,
];
