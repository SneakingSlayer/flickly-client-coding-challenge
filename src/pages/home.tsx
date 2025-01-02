import AppContainer from '@/components/container';
import MovieCategoryCarousel from '@/components/movie-category-carousel';
import Hero from '@/features/home/components/hero';
import useGetMovieGenres from '@/hooks/use-get-movie-genres';
import {
    getPopularMovies,
    getTopRatedMovies,
    getTrendingMovies,
} from '@/services/movie-service';
import { useQuery } from '@tanstack/react-query';

const HomePage = () => {
    // Get movie genres
    const { data: genres, isLoading: isLoadingGenres } = useGetMovieGenres();

    // Get trending movies
    const { data: trending, isLoading: isLoadingTrending } = useQuery({
        queryKey: ['get-trending-movies'],
        queryFn: () => getTrendingMovies({ time_window: 'day' }),
    });

    // Get popular movies
    const { data: popular, isLoading: isLoadingPopular } = useQuery({
        queryKey: ['get-popular-movies'],
        queryFn: () => getPopularMovies({}),
    });

    // Get top rated movies
    const { data: topRated, isLoading: isLoadingTopRated } = useQuery({
        queryKey: ['get-top-rated-movies'],
        queryFn: () => getTopRatedMovies({}),
    });

    return (
        <>
            <Hero
                isLoading={isLoadingGenres || isLoadingTrending}
                genres={genres}
                trending={trending}
            />

            <AppContainer className="mt-[-70px] sm:mt-[-100px] relative z-[10] mb-4">
                <MovieCategoryCarousel
                    isLoading={isLoadingPopular}
                    title="What's Popular?"
                    data={popular}
                />
            </AppContainer>

            <AppContainer className="relative z-[10] mb-8">
                <MovieCategoryCarousel
                    isLoading={isLoadingTopRated}
                    title="Top Rated Films"
                    data={topRated}
                />
            </AppContainer>
        </>
    );
};

export default HomePage;
