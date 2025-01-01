import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';
import AppContainer from '../container';
import Typography from '../typography';

const Footer = () => {
    return (
        <footer className="py-4">
            <AppContainer className="flex  flex-col-reverse sm:flex-row sm:justify-between justify-center items-center gap-2">
                <Typography variant="small" className="text-muted-foreground">
                    2024 © All rights reserved.{' '}
                    <span className="font-bold text-white">
                        flick<span className="text-primary">ly</span>.
                    </span>
                </Typography>
                <ul className="flex gap-4 items-center text-muted-foreground">
                    <li>
                        <FaFacebookSquare />
                    </li>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaTwitter />
                    </li>
                    <li>
                        <FaYoutube />
                    </li>
                </ul>
            </AppContainer>
        </footer>
    );
};

export default Footer;
