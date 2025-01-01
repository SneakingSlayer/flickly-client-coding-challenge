import Typography from '../typography';
import { routes } from './constants';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { FaSearch } from 'react-icons/fa';

const DesktopNav = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
                <div>
                    <Typography
                        variant="h5"
                        className="!tracking-wider font-black "
                    >
                        flick<span className="text-primary">ly.</span>
                    </Typography>
                </div>
                <ul className="flex gap-4">
                    {routes.map((route, i) => {
                        const Icon = route.icon;
                        return (
                            <li key={i}>
                                <NavLink
                                    to={route.path}
                                    className={({ isActive }) =>
                                        cn(
                                            isActive ? 'text-primary' : '',
                                            'flex items-center gap-1.5',
                                        )
                                    }
                                >
                                    <Icon fontSize={13} />
                                    <Typography
                                        variant="extra-small"
                                        className="font-medium"
                                    >
                                        {route.name}
                                    </Typography>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex items-center gap-2">
                <Button variant={'link'} size={'icon'} className="text-xs">
                    <FaSearch />
                </Button>
                <Button variant={'link'} size={'sm'} className="text-xs">
                    Register
                </Button>
                <Button size={'sm'} className="text-xs">
                    Login
                </Button>
            </div>
        </div>
    );
};

export default DesktopNav;
