import CarouselPagination from '@/components/carousel-pagination';
import AppContainer from '@/components/container';
import StarRating from '@/components/star-rating';
import Typography from '@/components/typography';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { CarouselItem, useCarousel } from '@/components/ui/carousel';
import Vignette from '@/components/vignette';
import {
    cn,
    convertToFiveStarRating,
    getGenreNameById,
    getImageUrl,
} from '@/lib/utils';
import { MovieGenreDto, SearchMovieDto } from '@/types/movie';
import { FaPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Props extends SearchMovieDto {
    genres?: {
        genres: MovieGenreDto[];
    };
}

const HeroItem = ({ genres, ...movie }: Props) => {
    const { scrollNext, scrollPrev } = useCarousel();

    // Find movie genre names
    const movieGenres = movie.genre_ids.map((genreId) =>
        getGenreNameById(genreId, genres),
    );

    // Convert 1-10 rating scale to 1-5
    const stars = convertToFiveStarRating(movie.vote_average);

    return (
        <CarouselItem
            className="h-[70dvh] w-full relative"
            style={{
                backgroundImage: `url('${getImageUrl(movie.backdrop_path)}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Vignette className="h-[100px] opacity-[50%] w-full top-0 rotate-180 z-[2] absolute" />
            <Vignette className="h-[400px] w-full bottom-0 z-[2] absolute" />
            <AppContainer className="h-full flex flex-col gap-6 justify-end items-start sm:flex-row sm:items-end sm:justify-between pb-24 sm:pb-40 relative z-[3]">
                <div className="w-full max-w-xl">
                    <div className="mb-6">
                        <Typography
                            variant="h1"
                            className="line-clamp-2 sm:line-clamp-none font-bold mb-1.5"
                        >
                            {movie.title}
                        </Typography>

                        <div className="flex flex-wrap gap-2 mb-1.5">
                            <Typography
                                className={cn(
                                    'font-medium',
                                    movie.adult
                                        ? 'text-destructive'
                                        : 'text-primary',
                                )}
                            >
                                {movie.adult ? '18+' : 'PG'}
                            </Typography>
                            <Typography>·</Typography>
                            <Typography className="font-medium">
                                2024
                            </Typography>
                            <Typography>·</Typography>
                            {movieGenres.map((genre, i) => (
                                <Badge
                                    key={i}
                                    variant={'secondary-transluscent'}
                                >
                                    {genre}
                                </Badge>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <StarRating rating={stars} maxStars={5} />
                            <Typography>{stars}</Typography>
                        </div>
                    </div>

                    <div className="gap-2 flex items-center">
                        <Button>
                            <FaPlayCircle /> Watch Now
                        </Button>
                        <Link
                            to={`/movie/${movie.id}`}
                            className={buttonVariants({ variant: 'link' })}
                        >
                            Read Overview
                        </Link>
                    </div>
                </div>

                <CarouselPagination
                    onNavigate={(dir) => {
                        const scrollFn =
                            dir === 'next' ? scrollNext : scrollPrev;
                        scrollFn();
                    }}
                />
            </AppContainer>
        </CarouselItem>
    );
};

export default HeroItem;
