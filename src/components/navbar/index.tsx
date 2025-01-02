import { useMediaQuery } from 'usehooks-ts';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import MobileNav from './mobile-nav';
import DesktopNav from './desktop-nav';
import AppContainer from '../container';
import SearchFormModal from '../search-form-modal';
import { useNavigate } from 'react-router-dom';
import { useToggle } from 'usehooks-ts';

const Navbar = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const navigate = useNavigate();
    const [toggle, setToggle] = useToggle();

    const [search, setSearch] = useState('');
    const [showNavbar, setShowNavbar] = useState(true);
    const [isScrolledToTop, setIsScrolledToTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!search) return;
        navigate(`/search?query=${search}`);
        setSearch('');
        if (toggle) setToggle();
    };

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
        <>
            <nav
                className={cn(
                    'w-full bg-transparent fixed top-0 left-0 z-[99] h-[60px] sm:h-[70px] flex items-center transition-transform duration-300',
                    showNavbar ? 'translate-y-0' : '-translate-y-full',
                    isScrolledToTop
                        ? 'bg-transparent'
                        : 'bg-background/40 backdrop-blur shadow-lg',
                )}
            >
                <AppContainer>
                    {isDesktop && (
                        <DesktopNav onOpenSearchForm={() => setToggle()} />
                    )}
                    {!isDesktop && (
                        <MobileNav
                            onSubmit={handleSubmitSearch}
                            onValueChange={(e) => setSearch(e)}
                            value={search}
                        />
                    )}
                </AppContainer>
            </nav>

            <SearchFormModal
                value={search}
                onValueChange={(e) => setSearch(e)}
                onSubmit={handleSubmitSearch}
                open={toggle}
                onOpenChange={() => {
                    setToggle();
                    setSearch('');
                }}
            />
        </>
    );
};

export default Navbar;
