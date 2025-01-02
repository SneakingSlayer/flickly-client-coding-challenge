import AppContainer from '@/components/container';
import MovieCard from '@/components/movie-card';
import Typography from '@/components/typography';
import { Skeleton } from '@/components/ui/skeleton';
import { searchMovies } from '@/services/movie-service';
import { SearchMovieDto } from '@/types/movie';
import { Paginated } from '@/types/pagination';
import { useInfiniteQuery } from '@tanstack/react-query';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Spinner from '@/components/spinner';

const SearchMoviesPage = () => {
    const navigate = useNavigate();
    const { ref, inView } = useInView({
        threshold: 1,
    });
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    // Infinite query
    const {
        data: searchResults,
        isLoading,
        isError,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['search-movies', query],
        queryFn: ({ pageParam = 1 }) =>
            searchMovies({ query, page: pageParam }),
        getNextPageParam: (data: Paginated<SearchMovieDto>) => {
            const nextPage =
                data.page < data.total_pages ? data.page + 1 : null;

            return nextPage;
        },
        initialPageParam: 1,
        enabled: !!query,
    });

    // Check if searchResults is empty
    const isEmpty =
        !isLoading &&
        !isError &&
        (!searchResults ||
            searchResults.pages.every(
                (page) => (page.results?.length ?? 0) === 0,
            ));

    // Fetch next page
    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    // Just redirect home if no query for now
    useEffect(() => {
        if (!query) {
            navigate('/');
        }
    }, [query, navigate]);

    return (
        <AppContainer className="pt-20 pb-8">
            <div className="mb-4 flex items-center gap-2">
                <FaSearch fontSize={16} className="mt-1" />

                <Typography>
                    Search results for{' '}
                    <Typography
                        variant="h5"
                        className="font-semibold text-primary"
                        as={'span'}
                    >
                        "{query}"
                    </Typography>
                </Typography>
            </div>

            {isEmpty && (
                <div className="py-4">
                    <Typography className="text-center text-muted-foreground">
                        We couldn't find anything.
                    </Typography>
                </div>
            )}

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {isLoading &&
                    [...Array(20)].map((_, i) => (
                        <Skeleton key={i} className="h-[225px] w-full" />
                    ))}

                {!isLoading &&
                    !isEmpty &&
                    searchResults?.pages?.map((page) =>
                        page?.results?.map((movie, i) => (
                            <MovieCard
                                key={i}
                                {...movie}
                                containerClassName="w-full"
                            />
                        )),
                    )}
                <div ref={ref} />
            </div>

            {isFetchingNextPage && (
                <div className="flex justify-center py-4">
                    <Spinner />
                </div>
            )}
        </AppContainer>
    );
};

export default SearchMoviesPage;
