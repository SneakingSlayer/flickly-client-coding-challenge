import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../footer';
import { useEffect } from 'react';

const AppLayout = () => {
    const location = useLocation();

    // Scroll to top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [location]);

    return (
        <>
            <Navbar />
            <div className="min-h-[94dvh]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default AppLayout;
