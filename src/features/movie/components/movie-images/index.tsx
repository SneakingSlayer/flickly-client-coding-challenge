import Typography from '@/components/typography';
import { Skeleton } from '@/components/ui/skeleton';
import { getImageUrl } from '@/lib/utils';
import { MovieImagesDto } from '@/types/movie';
import { useMemo } from 'react';
import { HiPhoto } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

interface Props {
    images?: MovieImagesDto;
    isLoading?: boolean;
}

const MovieImages = ({ images, isLoading }: Props) => {
    const imageCount = useMemo(
        () =>
            (images?.backdrops?.length ?? 0) +
            (images?.posters?.length ?? 0) +
            (images?.logos?.length ?? 0),
        [images],
    );

    return (
        <>
            <div className="flex items-center justify-between gap-4 mb-4">
                <Typography variant="h4" className="font-semibold">
                    Photos
                </Typography>
                <Link to={'/'}>
                    <Typography
                        variant="small"
                        className="font-semibold text-primary"
                    >
                        See All
                    </Typography>
                </Link>
            </div>
            <div className="grid  grid-cols-2 md:grid-cols-4 gap-4">
                {isLoading &&
                    [...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="w-full xs:h-[150px]" />
                    ))}
                {!isLoading && (
                    <>
                        {images?.backdrops?.slice(0, 3)?.map((backdrop, i) => (
                            <div
                                key={i}
                                className=" xs:h-[150px] w-full rounded-md overflow-hidden"
                            >
                                <img
                                    src={getImageUrl(backdrop.file_path)}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}

                        <div className="cursor-pointer  xs:h-[150px] w-full bg-muted rounded-md flex justify-center items-center">
                            <div className="flex items-center gap-1 flex-col justify-center">
                                <Typography variant="h2">
                                    <HiPhoto />
                                </Typography>
                                <Typography
                                    variant="extra-small"
                                    className="text-muted-foreground"
                                >
                                    {imageCount} PHOTOS
                                </Typography>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default MovieImages;
