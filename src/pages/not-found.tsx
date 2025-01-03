import Typography from '@/components/typography';

const NotFoundPage = () => {
    return (
        <div className="h-[100dvh] w-full flex items-center justify-center">
            <Typography className="font-bold">
                <span className="text-primary">ERROR</span> 404
            </Typography>
        </div>
    );
};

export default NotFoundPage;
