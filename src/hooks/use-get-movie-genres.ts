import { getMovieGenres } from '@/services/movie-service';
import { useQuery } from '@tanstack/react-query';

/**
 * Gets all movie genres.
 */
const useGetMovieGenres = (language = 'en-US') => {
    const data = useQuery({
        queryKey: ['get-movie-genres'],
        queryFn: () => getMovieGenres({ language }),
    });

    return { ...data };
};

export default useGetMovieGenres;
