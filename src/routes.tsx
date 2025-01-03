import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '@/components/layouts/app-layout';

const HomePage = React.lazy(() => import('@/pages/home'));
const SearchMoviesPage = React.lazy(() => import('@/pages/search'));
const ViewMoviePage = React.lazy(() => import('@/pages/view-movie'));
const NotFoundPage = React.lazy(() => import('@/pages/not-found'));

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchMoviesPage />} />
                <Route path="/movie/:id" element={<ViewMoviePage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;
