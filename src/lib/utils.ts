import { MovieGenreDto } from '@/types/movie';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Constructs a complete URL for an image hosted on TMDB based on the provided image name and size.
 *
 * @param {string} name - The name or file path of the image (e.g., the image ID or file name).
 * @param {'original' | 'w100' | 'w200' | 'w300' | 'w400' | 'w500'} [size='original'] - The size of the image.
 *
 * @returns {string} The complete URL for the image.
 * The URL is formed by concatenating the TMDB image base URL, the specified size, and the image name.
 */
export function getImageUrl(
    name: string,
    size: 'original' | 'w100' | 'w200' | 'w300' | 'w400' | 'w500' = 'original',
) {
    return `https://image.tmdb.org/t/p/${size}/${name}`;
}

/**
 * Retrieves the genre name by its ID from the provided data object.
 *
 * @param {number} id - The ID of the genre to find.
 * @param {Object} [data] - An optional object containing an array of genres.
 *
 * @returns {string} The name of the genre corresponding to the given ID, or 'None' if not found.
 */
export function getGenreNameById(
    id: number,
    data?: { genres: MovieGenreDto[] },
) {
    return data?.genres.find((genre) => genre.id === id)?.name ?? 'None';
}

/**
 * Converts a numerical average rating (out of 10) to a five-star rating system.
 * The conversion divides the average by 2 and then rounds to the nearest half-star.
 *
 * @param {number} avg - The average rating on a scale from 0 to 10.
 * @returns {number} The equivalent rating on a 5-star scale, rounded to the nearest half-star.
 */
export const convertToFiveStarRating = (avg: number) => {
    const fiveStarRating = avg / 2;
    return Math.round(fiveStarRating * 2) / 2; // Round to the nearest half-star
};

/**
 * Converts a movie's runtime in minutes to a formatted string representing hours and minutes.
 *
 * @param {number} data - The runtime of the movie in minutes. This should be a positive integer.
 *
 * @returns {string} A string representing the movie's duration in the format "{hours}hrs {minutes}mins",
 *   or "Runtime not available" if the `data` is falsy (e.g., `0` or `undefined`).
 */
export const getMovieDuration = (data: number) => {
    const runtime = data;
    if (!runtime) return 'Runtime not available';

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return `${hours}hrs ${minutes}mins`;
};
