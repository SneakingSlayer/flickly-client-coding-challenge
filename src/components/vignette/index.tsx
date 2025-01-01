import { cn } from '@/lib/utils';
import React from 'react';

const Vignette = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                'bg-gradient-to-b from-transparent via-transparent to-black [background:linear-gradient(180deg,rgba(26,26,26,0)_0%,rgba(26,26,26,1)_100%)]',
                className,
            )}
            {...props}
        />
    );
};

export default Vignette;
