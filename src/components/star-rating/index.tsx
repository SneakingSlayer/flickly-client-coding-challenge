import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface Props {
    rating: number;
    maxStars: number;
}

const StarRating = ({ rating, maxStars }: Props) => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
        if (rating >= i) {
            stars.push(
                <FaStar key={i} className="text-amber-400" fontSize={28} />,
            );
        } else if (rating >= i - 0.5) {
            stars.push(
                <FaStarHalfAlt
                    key={i}
                    className="text-amber-400"
                    fontSize={28}
                />,
            );
        } else {
            stars.push(
                <FaRegStar key={i} className="text-amber-400" fontSize={28} />,
            );
        }
    }

    return <div className="flex items-center gap-2">{stars}</div>;
};

export default StarRating;
