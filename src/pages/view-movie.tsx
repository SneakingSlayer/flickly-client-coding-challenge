import AppContainer from '@/components/container';
import MovieCategoryCarousel from '@/components/movie-category-carousel';
import MovieBackdrop from '@/features/movie/components/movie-backdrop';
import MoviePoster from '@/features/movie/components/movie-poster';
import MovieProfile from '@/features/movie/components/movie-profile';
import {
    getMovieById,
    getMovieRecommendations,
} from '@/services/movie-service';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ViewMoviePage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const movieId = params?.id;

    // Get movie recommendations
    const { data: recommendations, isLoading: isLoadingRecommendations } =
        useQuery({
            queryKey: ['get-movie-recommendations', movieId],
            queryFn: () =>
                getMovieRecommendations(Number(movieId), { page: 1 }),
            enabled: !!movieId,
        });

    // Get movie
    const {
        data: movie,
        isLoading: isLoadingMovie,
        isError: isErrorMovie,
    } = useQuery({
        queryKey: ['get-movie-by-id', movieId],
        queryFn: () => getMovieById(Number(movieId)),
        enabled: !!movieId,
    });

    // Navigate to 404 if not found.
    useEffect(() => {
        if (isErrorMovie) {
            navigate('/404');
        }
    }, [isErrorMovie, navigate]);

    return (
        <>
            <AppContainer className="pt-20">
                <MovieBackdrop imgSrc={movie?.backdrop_path} />
                <div className="flex sm:items-start items-center sm:flex-row flex-col gap-4 mt-[-180px] sm:mt-[-150px] relative z-[2] ">
                    <MoviePoster imgSrc={movie?.poster_path} />
                    <MovieProfile isLoading={isLoadingMovie} movie={movie} />
                </div>

                <div>
                    <MovieCategoryCarousel
                        title="Similar Movies"
                        data={recommendations}
                        isLoading={isLoadingRecommendations}
                    />
                </div>
            </AppContainer>
        </>
    );
};

export default ViewMoviePage;
