import { useMediaQuery } from 'usehooks-ts';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import MobileNav from './mobile-nav';
import DesktopNav from './desktop-nav';
import AppContainer from '../container';

const Navbar = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const [showNavbar, setShowNavbar] = useState(true);
    const [isScrolledToTop, setIsScrolledToTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Set navbar state
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0) {
                setIsScrolledToTop(true);
                setShowNavbar(true);
            } else {
                setIsScrolledToTop(false);

                if (currentScrollY > lastScrollY) {
                    setShowNavbar(false);
                } else {
                    setShowNavbar(true);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={cn(
                'w-full bg-transparent fixed top-0 left-0 z-[99] h-[70px] flex items-center transition-transform duration-300',
                showNavbar ? 'translate-y-0' : '-translate-y-full',
                isScrolledToTop
                    ? 'bg-transparent'
                    : 'bg-background/40 backdrop-blur shadow-lg',
            )}
        >
            <AppContainer>
                {isDesktop && <DesktopNav />}
                {!isDesktop && <MobileNav />}
            </AppContainer>
        </nav>
    );
};

export default Navbar;
