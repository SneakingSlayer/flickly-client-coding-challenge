import axiosInstance from '@/lib/axiosConfig';
import {
    GetMovieByIdDto,
    GetMovieGenresQuery,
    MovieGenreDto,
    MovieListsQuery,
    MovieRecommendationsQuery,
    SearchMovieDto,
    SearchMovieQuery,
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

/**
 * Fetches a list of popular movies from the API.
 *
 * @param {MovieListsQuery} params - The query parameters to filter or customize the request.
 *
 * @returns {Promise<Paginated<SearchMovieDto>>} A promise that resolves to a paginated list of popular movies.
 */
export const getPopularMovies = async (params: MovieListsQuery) => {
    return (
        await axiosInstance.get<Paginated<SearchMovieDto>>(`/movies/popular`, {
            params,
        })
    ).data;
};

/**
 * Fetches a list of top-rated movies from the API.
 *
 * @param {MovieListsQuery} params - The query parameters to customize the request.
 *
 * @returns {Promise<Paginated<SearchMovieDto>>} A promise that resolves to a paginated list of top-rated movies.
 */
export const getTopRatedMovies = async (params: MovieListsQuery) => {
    return (
        await axiosInstance.get<Paginated<SearchMovieDto>>(
            `/movies/top-rated`,
            {
                params,
            },
        )
    ).data;
};

/**
 * Searches for movies based on the provided query parameters.
 *
 * @param {SearchMovieDto} params - The search parameters to filter or customize the request.
 *
 * @returns {Promise<Paginated<SearchMovieDto>>} A promise that resolves to a paginated list
 *   of search results, which will be in the form of `Paginated<SearchMovieDto>`. This contains
 *   an array of movie objects (`SearchMovieDto`) and metadata related to pagination.
 */
export const searchMovies = async (params: SearchMovieQuery) => {
    return (
        await axiosInstance.get<Paginated<SearchMovieDto>>(`/movies/search`, {
            params,
        })
    ).data;
};

/**
 * Fetches movie recommendations based on a specific movie ID.
 *
 * @param {number} id - The ID of the movie for which to fetch recommendations. This ID should
 *   correspond to an existing movie in the database.
 * @param {MovieRecommendationsQuery} params - The query parameters used to customize the request.
 *
 * @returns {Promise<Paginated<SearchMovieDto>>} A promise that resolves to a paginated list
 *   of movie recommendations.
 */
export const getMovieRecommendations = async (
    id: number,
    params: MovieRecommendationsQuery,
) => {
    return (
        await axiosInstance.get<Paginated<SearchMovieDto>>(
            `/movies/${id}/recommendations`,
            { params },
        )
    ).data;
};

/**
 * Fetches detailed information about a movie by its ID.
 *
 * @param {number} id - The ID of the movie to fetch details for. This ID should correspond to an
 *   existing movie in the database.
 *
 * @returns {Promise<GetMovieByIdDto>} A promise that resolves to the detailed information of
 *   the specified movie, in the form of a `GetMovieByIdDto` object.
 */
export const getMovieById = async (id: number) => {
    return (await axiosInstance.get<GetMovieByIdDto>(`/movies/${id}`)).data;
};
