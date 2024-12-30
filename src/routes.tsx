import React from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('./pages/home'));

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
};

export default AppRoutes;
