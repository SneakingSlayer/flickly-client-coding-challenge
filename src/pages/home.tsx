import Hero from '@/features/home/components/hero';
import useGetMovieGenres from '@/hooks/use-get-movie-genres';
import { getTrendingMovies } from '@/services/movie-service';
import { useQuery } from '@tanstack/react-query';

const HomePage = () => {
    // Get movie genres
    const { data: genres, isLoading: isLoadingGenres } = useGetMovieGenres();

    // Get trending movies
    const { data: trending, isLoading: isLoadingTrending } = useQuery({
        queryKey: ['get-trending-movies'],
        queryFn: () => getTrendingMovies({ time_window: 'day' }),
    });

    return (
        <>
            <Hero
                isLoading={isLoadingGenres || isLoadingTrending}
                genres={genres}
                trending={trending}
            />
        </>
    );
};

export default HomePage;
