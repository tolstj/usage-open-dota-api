import React from 'react';
import { Heroes } from './components/Heroes';
import { Pro } from './components/Pro';
import { Teams } from './components/Teams';

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
        component: Pro,
    },
    {
        name: 'Команды',
        route: '/teams',
        component: Teams,
    },
];

export const firstHeaderRoute: Route = headerRoutes[0];

export const routes: Route[] = [
    ...headerRoutes,
];
