export interface SearchMovieDto {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface SearchMovieQuery {
    query?: string;
    include_adult?: boolean;
    language?: string;
    primary_release_year?: string;
    page?: number;
    region?: string;
    year?: string;
}

export interface GetMovieQuery {
    append_to_response?: string;
    language?: string;
}

export interface GetMovieByIdDto {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null | object;
    budget: number;
    genres: { id: number; name: string }[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: { iso_3166_1: string; name: string }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface TrendingMoviesQuery {
    time_window?: string;
    language?: string;
}

export interface GetMovieGenresQuery {
    language?: string;
}

export interface MovieGenreDto {
    id: number;
    name: string;
}

export interface MovieListsQuery {
    region?: string;
    page?: number;
}

export interface MovieRecommendationsQuery {
    language?: string;
    page?: number;
}

export interface MovieCreditsQuery {
    language?: string;
}

export interface MovieCastDto {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export interface MovieCrewDto {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
}

export interface MovieCreditsDto {
    id: number;
    cast: MovieCastDto[];
    crew: MovieCrewDto[];
}

export interface MovieImagesQuery {
    language?: string;
    include_image_language?: string;
}

export interface MovieImageDto {
    aspect_ratio: number;
    height: number;
    iso_639_1: string | null;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface MovieImagesDto {
    id: number;
    logos: MovieImageDto[];
    posters: MovieImageDto[];
    backdrops: MovieImageDto[];
}
