interface Route {
    name: string;
    route: string;
}

export const headerRoutes: Route[] = [
    {
        name: 'Герои',
        route: '/heroes',
    },
    {
        name: 'Профессионалы',
        route: '/pro',
    },
    {
        name: 'Команды',
        route: '/teams',
    },
];

export const firstHeaderRoute: Route = headerRoutes[0];

export const routes: Route[] = [
    ...headerRoutes,
];
