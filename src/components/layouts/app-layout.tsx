import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default AppLayout;
