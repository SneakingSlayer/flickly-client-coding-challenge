import { Button } from '../ui/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Props {
    onNavigate?: (value: 'prev' | 'next') => void;
}

const CarouselPagination = ({ onNavigate }: Props) => {
    return (
        <div className="flex gap-2 items-center">
            <Button
                onClick={() => onNavigate?.('prev')}
                variant={'outline'}
                size={'icon'}
                className="border-muted-foreground rounded-full"
            >
                <FaArrowLeft />
            </Button>
            <Button
                onClick={() => onNavigate?.('next')}
                variant={'outline'}
                size={'icon'}
                className="border-muted-foreground rounded-full"
            >
                <FaArrowRight />
            </Button>
        </div>
    );
};

export default CarouselPagination;
