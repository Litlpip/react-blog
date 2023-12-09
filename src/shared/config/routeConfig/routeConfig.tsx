import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export enum AppRoutes {
    MAIN = 'Main',
    ABOUT = 'About',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Array<RouteProps> = [
    {
        path: RoutePath.Main,
        element: <MainPage />,
    },
    {
        path: RoutePath.About,
        element: <AboutPage />,
    },
];
