import CarouselPagination from '@/components/carousel-pagination';
import Typography from '@/components/typography';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    useCarousel,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { getImageUrl } from '@/lib/utils';
import { MovieCastDto, MovieCrewDto } from '@/types/movie';
import { Link } from 'react-router-dom';

interface Props {
    data?: { cast?: MovieCastDto[]; crew?: MovieCrewDto[] };
    title: string;
    isLoading?: boolean;
}

const MovieCreditsCarousel = ({ data, title, isLoading }: Props) => {
    return (
        <>
            <div className="flex items-center justify-between gap-4 mb-4">
                <Typography variant="h4" className="font-semibold">
                    {title}
                </Typography>
                <Link to={'/'}>
                    <Typography
                        variant="small"
                        className="font-semibold text-primary"
                    >
                        See All
                    </Typography>
                </Link>
            </div>

            {isLoading && (
                <div className="overflow-hidden flex gap-4 mb-6">
                    {[...Array(10)].map((_, i) => (
                        <Skeleton
                            key={i}
                            className="h-[100px] w-[100px] rounded-full overflow-hidden"
                        />
                    ))}
                </div>
            )}

            {!isLoading && (
                <Carousel className="mb-6">
                    <CarouselContentWrapper data={data} />
                </Carousel>
            )}
        </>
    );
};

const CarouselContentWrapper = ({
    data,
}: {
    data?: { cast?: MovieCastDto[]; crew?: MovieCrewDto[] };
}) => {
    const { scrollSnaplist } = useCarousel();
    return (
        <>
            <CarouselContent className="gap-6 min-w-0">
                {data?.cast?.map((cast, i) => (
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
                                    {cast.character}
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

export default MovieCreditsCarousel;
