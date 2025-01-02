import { cn, getImageUrl } from '@/lib/utils';
import { SearchMovieDto } from '@/types/movie';
import { useState } from 'react';
import { FaPhotoVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Props extends SearchMovieDto {
    containerClassName?: string;
}

const MovieCard = ({ containerClassName, ...props }: Props) => {
    const { id, poster_path, backdrop_path } = props;
    const [validImg, setValidImg] = useState(true);
    const [loading, setLoading] = useState(true);

    return (
        <Link to={`/movie/${id}`}>
            <div
                className={cn(
                    'h-[225px] w-[150px] rounded-md overflow-hidden',
                    containerClassName,
                )}
            >
                {validImg && (
                    <img
                        src={getImageUrl(poster_path || backdrop_path, 'w200')}
                        className="w-full h-full object-cover"
                        onError={() => {
                            setValidImg(false);
                        }}
                        onLoad={() => setLoading(false)}
                    />
                )}

                {(!validImg || loading) && (
                    <div className="w-full h-full object-cover bg-muted flex justify-center items-center">
                        <FaPhotoVideo
                            className="text-muted-foreground"
                            fontSize={24}
                        />
                    </div>
                )}
            </div>
        </Link>
    );
};

export default MovieCard;