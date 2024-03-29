import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {routeConfig.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={
                        <div className="page-wrapper">{route.element}</div>
                    }
                />
            ))}
        </Routes>
    </Suspense>
);
