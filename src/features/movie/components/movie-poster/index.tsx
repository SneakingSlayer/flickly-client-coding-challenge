import { getImageUrl } from '@/lib/utils';

interface Props {
    imgSrc?: string;
}

const MoviePoster = ({ imgSrc }: Props) => {
    return (
        <div className="h-[225px] w-[150px] sm:h-[337.5px] sm:min-w-[225px] sm:w-[225px] overflow-hidden rounded-md">
            {imgSrc && (
                <img
                    className="h-full w-full object-cover"
                    src={getImageUrl(imgSrc, 'w300')}
                />
            )}

            {!imgSrc && <div className="h-full w-full bg-muted" />}
        </div>
    );
};

export default MoviePoster;
