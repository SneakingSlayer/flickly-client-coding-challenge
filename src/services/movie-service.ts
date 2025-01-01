import axiosInstance from '@/lib/axiosConfig';
import {
    GetMovieGenresQuery,
    MovieGenreDto,
    SearchMovieDto,
    TrendingMoviesQuery,
} from '@/types/movie';

import { Paginated } from '@/types/pagination';

/**
 * Fetches a list of trending movies based on the provided query parameters.
 *
 * @param {TrendingMoviesQuery} params - The query parameters used to filter or modify
 * the list of trending movies (e.g., page number, language, time window).
 *
 * @returns {Promise<Paginated<SearchMovieDto>>} - A promise that resolves to a paginated
 * result containing the trending movies matching the query parameters.
 * Each movie in the result conforms to the `SearchMovieDto` type.
 */
export const getTrendingMovies = async (params: TrendingMoviesQuery) => {
    return (
        await axiosInstance.get<Paginated<SearchMovieDto>>(`/movies/trending`, {
            params,
        })
    ).data;
};

/**
 * Fetches the list of movie genres from the API.
 *
 * @param {GetMovieGenresQuery} params - The query parameters for the request.
 *  - `language`: The language in which the movie genres should be returned (e.g., 'en', 'es').
 *
 * @returns {Promise<MovieGenreDto>} A promise that resolves to a `MovieGenreDto` object,
 *  which contains an array of movie genres.
 */
export const getMovieGenres = async (params: GetMovieGenresQuery) => {
    return (
        await axiosInstance.get<{ genres: MovieGenreDto[] }>(`/movies/genres`, {
            params,
        })
    ).data;
};
