import { SearchMovieDto } from '@/types/movie';
import { Paginated } from '@/types/pagination';
import Typography from '../typography';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    useCarousel,
} from '../ui/carousel';
import { Link } from 'react-router-dom';
import CarouselPagination from '../carousel-pagination';
import { Skeleton } from '../ui/skeleton';
import MovieCard from '../movie-card';

interface Props {
    data?: Paginated<SearchMovieDto>;
    title: string;
    isLoading?: boolean;
}

const MovieCategoryCarousel = ({ data, title, isLoading }: Props) => {
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
                        <Skeleton key={i} className="h-[225px] min-w-[150px]" />
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
    data?: Paginated<SearchMovieDto>;
}) => {
    const { scrollSnaplist } = useCarousel();
    return (
        <>
            <CarouselContent className="gap-4">
                {data?.results.map((movie, i) => (
                    <CarouselItem key={i} className="h-[225px] max-w-[150px]">
                        <MovieCard key={i} {...movie} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex justify-end pt-5">
                <CarouselPagination onNavigate={scrollSnaplist} />
            </div>
        </>
    );
};

export default MovieCategoryCarousel;
