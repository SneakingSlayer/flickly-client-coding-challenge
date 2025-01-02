import CarouselPagination from '@/components/carousel-pagination';
import Typography from '@/components/typography';
import {
    CarouselContent,
    CarouselItem,
    useCarousel,
} from '@/components/ui/carousel';
import { getImageUrl } from '@/lib/utils';
import { useEffect } from 'react';
import { TabType } from './types';

interface CreditItem {
    profile_path?: string | null;
    name: string;
    position: string;
}

const CarouselContentWrapper = ({
    data,
    tab,
}: {
    data?: CreditItem[];
    tab: TabType;
}) => {
    const { scrollSnaplist, api } = useCarousel();

    // Reset scroll on tab change
    useEffect(() => {
        if (api) {
            api.scrollTo(0);
        }
    }, [api, tab]);
    return (
        <>
            <CarouselContent className="gap-6 min-w-0">
                {data?.map((cast, i) => (
                    <CarouselItem
                        key={i}
                        className="min-w-0 max-w-[100px] text-center"
                    >
                        <div className="min-w-0 gap-3 flex flex-col items-center justify-center">
                            <div className="h-[100px] w-[100px] rounded-full overflow-hidden">
                                {cast.profile_path && (
                                    <img
                                        className="h-full w-full object-cover"
                                        src={getImageUrl(
                                            cast.profile_path,
                                            'w200',
                                        )}
                                    />
                                )}

                                {!cast.profile_path && (
                                    <div className="flex items-center justify-center h-full w-full rounded-full bg-muted">
                                        {cast.name
                                            .split(' ')
                                            .map((word) => word?.[0] ?? '')
                                            .join('')}
                                    </div>
                                )}
                            </div>
                            <div>
                                <Typography
                                    variant="extra-small"
                                    className="whitespace-nowrap truncate max-w-[100px]"
                                >
                                    {cast.name}
                                </Typography>
                                <Typography
                                    variant="extra-small"
                                    className="whitespace-nowrap truncate max-w-[100px] text-muted-foreground"
                                >
                                    {cast.position}
                                </Typography>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex justify-end pt-5">
                <CarouselPagination onNavigate={scrollSnaplist} />
            </div>
        </>
    );
};

export default CarouselContentWrapper;
