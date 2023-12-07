import { RouteProps } from "react-router-dom";

import { FavoritePage, MainPage } from "@/components/Pages";

export enum AppRoutes {
    MAIN = 'main',
     FAVORITES = 'favorites',
}

export const getRouteMain = () => '/';
export const getRouteFavorites = () => '/favorites';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteFavorites()]: AppRoutes.FAVORITES,
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.FAVORITES]: {
        path: getRouteFavorites(),
        element: <FavoritePage />,
    },
};
