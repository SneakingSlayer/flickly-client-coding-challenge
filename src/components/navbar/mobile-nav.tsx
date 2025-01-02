import Typography from '../typography';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '../ui/button';
import { IoMenu } from 'react-icons/io5';
import { Input } from '../ui/input';
import { FaSearch } from 'react-icons/fa';
import { routes } from './constants';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

interface Props {
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    value?: string;
    onValueChange?: (e: string) => void;
}

const MobileNav = ({ value, onSubmit, onValueChange }: Props) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex items-center justify-between">
            <Link to={'/'}>
                <Typography
                    variant="h5"
                    className="!tracking-wider font-black "
                >
                    flick<span className="text-primary">ly.</span>
                </Typography>
            </Link>

            <Sheet open={open} onOpenChange={() => setOpen(!open)}>
                <SheetTrigger
                    className={cn(
                        buttonVariants({
                            size: 'icon',
                            variant: 'outline',
                        }),
                        'h-9 w-9',
                    )}
                >
                    <IoMenu />
                </SheetTrigger>
                <SheetContent className="z-[100] w-[100%] px-4 h-full">
                    <div className="flex flex-col h-full">
                        <Typography className="!tracking-wider font-black text-left mb-3">
                            flick<span className="text-primary">ly.</span>
                        </Typography>
                        <div className="mb-4">
                            <form
                                onSubmit={(e) => {
                                    setOpen(!open);
                                    onSubmit?.(e);
                                }}
                                className="relative"
                            >
                                <Input
                                    onChange={(e) =>
                                        onValueChange?.(e.target.value)
                                    }
                                    value={value}
                                    placeholder="What are you looking for?"
                                    className="text-sm"
                                />
                                <div className="text-primary absolute top-[12px] right-[12px]">
                                    <FaSearch />
                                </div>
                            </form>
                        </div>
                        <ul className="space-y-2 grow">
                            {routes.map((route, i) => {
                                const Icon = route.icon;
                                return (
                                    <li key={i}>
                                        <NavLink
                                            onClick={(e) => {
                                                if (route.path !== '/') {
                                                    e.preventDefault();
                                                    return;
                                                }
                                                setOpen(false);
                                            }}
                                            to={route.path}
                                            key={i}
                                            className={({ isActive }) =>
                                                cn(
                                                    isActive
                                                        ? 'bg-primary/10 text-primary'
                                                        : '',
                                                    'flex items-center gap-2 px-4 py-3 rounded-md',
                                                )
                                            }
                                        >
                                            <Icon />
                                            <Typography
                                                className="font-medium"
                                                variant="h6"
                                            >
                                                {route.name}
                                            </Typography>
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="grid grid-cols-2 gap-2">
                            <Button variant={'outline'}>Register</Button>
                            <Button>Login</Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;
