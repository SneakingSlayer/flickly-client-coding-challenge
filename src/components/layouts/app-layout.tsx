import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../footer';

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default AppLayout;
