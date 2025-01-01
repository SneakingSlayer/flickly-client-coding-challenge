import { Carousel, CarouselContent } from '@/components/ui/carousel';
import { MovieGenreDto, SearchMovieDto } from '@/types/movie';
import { Paginated } from '@/types/pagination';
import HeroItem from './hero-item';
import { Skeleton } from '@/components/ui/skeleton';
import Vignette from '@/components/vignette';

interface Props {
    genres?: { genres: MovieGenreDto[] };
    trending?: Paginated<SearchMovieDto>;
    isLoading?: boolean;
}

const Hero = ({ genres, trending, isLoading }: Props) => {
    return (
        <>
            {!isLoading && (
                <Carousel
                    className="w-full"
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {trending?.results.map((movie, i) => (
                            <HeroItem key={i} genres={genres} {...movie} />
                        ))}
                    </CarouselContent>
                </Carousel>
            )}

            {isLoading && (
                <div className="w-full h-[70dvh] flex items-end relative">
                    <Vignette className="h-[100px] opacity-[50%] w-full top-0 rotate-180 z-[2] absolute" />
                    <Vignette className="h-[400px] w-full bottom-0 z-[2] absolute" />
                    <Skeleton className="w-full h-full bg-muted rounded-none" />
                </div>
            )}
        </>
    );
};

export default Hero;
