import StarRating from '@/components/star-rating';
import Typography from '@/components/typography';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { convertToFiveStarRating, getMovieDuration } from '@/lib/utils';
import { GetMovieByIdDto } from '@/types/movie';
import moment from 'moment';
import { FaPlayCircle } from 'react-icons/fa';

interface Props {
    isLoading?: boolean;
    movie?: GetMovieByIdDto;
}

const MovieProfile = ({ isLoading, movie }: Props) => {
    const rating = convertToFiveStarRating(movie?.vote_average ?? 0);

    if (isLoading) {
        return <LoadingMovieProfile />;
    }

    return (
        <div className="space-y-3">
            <div>
                <Typography
                    variant="h3"
                    className="font-bold text-center sm:text-left"
                >
                    {movie?.title}
                </Typography>

                <div className="flex justify-center sm:justify-start items-center gap-1">
                    <Typography variant="small">
                        {movie?.adult ? '18+' : 'PG'} •{' '}
                        {moment(movie?.release_date).year()} •{' '}
                        {getMovieDuration(movie?.runtime ?? 0)}
                    </Typography>
                </div>
            </div>

            <div className="gap-2 flex justify-center sm:justify-start items-center flex-wrap">
                {movie?.genres?.map((genre) => (
                    <Badge variant={'secondary-transluscent'} key={genre.id}>
                        {genre.name}
                    </Badge>
                ))}
            </div>

            <div className="flex justify-center sm:justify-start items-center gap-4 text-muted-foreground">
                <StarRating rating={rating} maxStars={5} />{' '}
                <Typography variant="small">{rating} stars</Typography>
            </div>

            <div className="flex flex-col items-center sm:items-start sm:flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                    <Button>
                        <FaPlayCircle /> Watch Now
                    </Button>
                    <Button variant={'link'}>Play Trailer</Button>
                </div>

                <Typography className="text-center sm:text-left text-muted-foreground">
                    {movie?.overview}
                </Typography>
            </div>
        </div>
    );
};

const LoadingMovieProfile = () => {
    return (
        <div className="flex flex-col sm:justify-start justify-center items-center sm:items-start gap-2 w-full h-full">
            <Skeleton className="w-full max-w-[300px] h-8" />
            <Skeleton className="w-full max-w-[200px] h-8" />
            <Skeleton className="w-full grow h-[200px]" />
        </div>
    );
};

export default MovieProfile;
