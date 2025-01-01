import {
    FaHome,
    FaFire,
    FaStar,
    FaPlayCircle,
    FaCalendarAlt,
} from 'react-icons/fa';

export const routes = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'Popular', path: '/popular', icon: FaFire },
    { name: 'Top Rated', path: '/top-rated', icon: FaStar },
    { name: 'Now Playing', path: '/now-playing', icon: FaPlayCircle },
    { name: 'Upcoming', path: '/upcoming', icon: FaCalendarAlt },
];
