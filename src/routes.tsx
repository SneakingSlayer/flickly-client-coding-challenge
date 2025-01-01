import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/layouts/app-layout';

const HomePage = React.lazy(() => import('./pages/home'));

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<HomePage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
