import { cn } from '@/lib/utils';
import React from 'react';

const AppContainer = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn('w-full max-w-5xl mx-auto px-4', className)}
            {...props}
        />
    );
};

export default AppContainer;
