import { CarouselApi } from '@/components/ui/carousel';
import { useCallback, useState } from 'react';

const usePaginateCarousel = () => {
    const [api, setApi] = useState<CarouselApi>();

    /**
     * Handles scroll actions by determining the direction ('prev' or 'next') and calling the respective scroll function.
     *
     * @param {('prev' | 'next')} state - The scroll direction. If 'next', scrolls to the next item. If 'prev', scrolls to the previous item.
     * @returns {void}
     */
    const handleScroll = useCallback(
        (state: 'prev' | 'next') => {
            if (!api) return;

            const scrollFn = state === 'next' ? api.scrollNext : api.scrollPrev;
            scrollFn();
        },
        [api],
    );

    /**
     * Handles scrolling in a snap-to-list component, either to the previous or next batch of slides.
     *
     * @param {('prev' | 'next')} state - The scroll direction. Can be either:
     *   - `'prev'`: Scrolls to the previous batch of slides.
     *   - `'next'`: Scrolls to the next batch of slides.
     *
     * @returns {void} This function does not return a value. It triggers a scroll action on the snap list.
     *
     * @throws {Error} If the `api` is not available or undefined, the function does nothing.
     */
    const handleScrollSnaplist = useCallback(
        (state: 'prev' | 'next') => {
            if (!api) return;

            // All snap points
            const snapPoints = api.scrollSnapList();

            // Get number of slides
            const visibleSlides = Math.floor(
                api.containerNode().clientWidth /
                    api.slideNodes()[0].clientWidth,
            );

            // Get current index
            const currentIndex = api.selectedScrollSnap();

            // Number of slides to scroll
            const batchSize = visibleSlides;

            const targetIndex =
                state === 'next'
                    ? Math.min(currentIndex + batchSize, snapPoints.length - 1)
                    : Math.max(currentIndex - batchSize, 0);

            // Scroll to the target index
            api.scrollTo(targetIndex);
        },
        [api],
    );

    return { api, setApi, handleScroll, handleScrollSnaplist };
};

export default usePaginateCarousel;
