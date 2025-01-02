import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMovieVideos } from '@/services/movie-service';
import { Button } from '../ui/button';
import { FaPlayCircle } from 'react-icons/fa';
import { btnVariantProps } from '../ui/button';
import Spinner from '../spinner';

interface Props {
    movieId?: number;
    title?: string;
    variant?: keyof typeof btnVariantProps;
    hasPlayIcon?: boolean;
}

const MovieVideoBtn = ({
    movieId,
    title,
    variant,
    hasPlayIcon = true,
}: Props) => {
    const [execute, setExecute] = useState(false);

    const { data: videos, isLoading: isLoadingVideos } = useQuery({
        queryKey: ['get-movie-videos'],
        queryFn: () => getMovieVideos(Number(movieId), {}),
        enabled: !!movieId && execute,
    });

    const handleWatch = useCallback(() => {
        if (videos?.results) {
            const url = videos.results?.find(
                (video) => video.type === 'Teaser' && video.site === 'YouTube',
            );

            setExecute(false);

            if (url) {
                window.open(
                    `https://youtube.com/watch?v=${url.key}`,
                    '_blank',
                    'noopener,noreferrer',
                );
            }
        }
    }, [videos]);

    useEffect(() => {
        if (execute) void handleWatch();
    }, [handleWatch, execute]);

    return (
        <Button
            disabled={isLoadingVideos}
            variant={variant}
            onClick={() => setExecute(true)}
        >
            {isLoadingVideos && <Spinner className="h-5 w-5" />}
            {!isLoadingVideos && (
                <>
                    {hasPlayIcon && <FaPlayCircle />} {title}
                </>
            )}
        </Button>
    );
};

export default MovieVideoBtn;
