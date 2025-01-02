import Vignette from '@/components/vignette';
import { cn, getImageUrl } from '@/lib/utils';

interface Props {
    imgSrc?: string;
    containerClassName?: string;
    topShadowClassName?: string;
    bottomShadowClassName?: string;
    leftShadowClassName?: string;
    rightShadowClassName?: string;
}

const MovieBackdrop = ({
    imgSrc,
    containerClassName,
    topShadowClassName,
    bottomShadowClassName,
    leftShadowClassName,
    rightShadowClassName,
}: Props) => {
    return (
        <div className={cn('h-[35dvh] w-full relative', containerClassName)}>
            {imgSrc && (
                <img
                    className="h-full w-full object-cover"
                    src={getImageUrl(imgSrc)}
                />
            )}

            {!imgSrc && (
                <div
                    className={cn(
                        'h-full w-full bg-muted rounded-lg',
                        containerClassName,
                    )}
                />
            )}

            <Vignette
                className={cn(
                    'h-[100px] w-full rotate-180 left-0 top-0 z-[2] absolute',
                    topShadowClassName,
                )}
            />
            <Vignette
                className={cn(
                    'h-[200px] w-full left-0 bottom-0 z-[2] absolute',
                    bottomShadowClassName,
                )}
            />
            <Vignette
                className={cn(
                    'h-[35dvh] w-[35dvh] left-0 top-0 rotate-90 z-[2] absolute',
                    leftShadowClassName,
                )}
            />
            <Vignette
                className={cn(
                    'h-[35dvh] w-[35dvh] right-0 top-0 rotate-[-90deg] z-[2] absolute',
                    rightShadowClassName,
                )}
            />
        </div>
    );
};

export default MovieBackdrop;
