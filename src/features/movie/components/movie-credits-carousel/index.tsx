import Typography from '@/components/typography';
import { Carousel } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MovieCastDto, MovieCrewDto } from '@/types/movie';
import { useState } from 'react';
import CarouselContentWrapper from './carousel-content-wrapper';
import { TabType } from './types';

interface Props {
    data?: { cast?: MovieCastDto[]; crew?: MovieCrewDto[] };
    title: string;
    isLoading?: boolean;
}

const MovieCreditsCarousel = ({ data, title, isLoading }: Props) => {
    const [tab, setTab] = useState<TabType>('cast');

    const crewData = data?.crew?.map((crew) => ({
        profile_path: crew?.profile_path,
        name: crew.name,
        position: crew.job,
    }));

    const castData = data?.cast?.map((cast) => ({
        profile_path: cast?.profile_path,
        name: cast.name,
        position: cast.character,
    }));

    return (
        <>
            <div className="flex items-center justify-between gap-4 mb-4">
                <Typography variant="h4" className="font-semibold">
                    {title}
                </Typography>
                <Tabs
                    value={tab}
                    defaultValue={tab}
                    onValueChange={(value) => {
                        setTab(value as TabType);
                    }}
                    className="w-auto"
                >
                    <TabsList>
                        <TabsTrigger value="cast">Cast</TabsTrigger>
                        <TabsTrigger value="crew">Crew</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            {isLoading && (
                <div className="overflow-hidden flex gap-4 mb-6">
                    {[...Array(10)].map((_, i) => (
                        <Skeleton
                            key={i}
                            className="min-h-[100px] min-w-[100px] max-h-[100px] max-w-[100px] rounded-full overflow-hidden"
                        />
                    ))}
                </div>
            )}

            {!isLoading && (
                <Carousel className="mb-6">
                    <CarouselContentWrapper
                        tab={tab}
                        data={tab === 'crew' ? crewData : castData}
                    />
                </Carousel>
            )}
        </>
    );
};

export default MovieCreditsCarousel;
