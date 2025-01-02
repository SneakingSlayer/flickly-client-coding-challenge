import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { DialogProps } from '@radix-ui/react-dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface Props extends DialogProps {
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    value?: string;
    onValueChange?: (e: string) => void;
}

const SearchFormModal = ({
    onSubmit,
    value = '',
    onValueChange,
    ...props
}: Props) => {
    return (
        <Dialog {...props}>
            <DialogContent
                hasCloseButton={false}
                className="max-w-[400px] p-0 gap-0"
            >
                <DialogHeader className="px-4 py-4 border-b">
                    <div className="flex justify-between items-center">
                        <DialogTitle className="font-semibold">
                            Search Movies
                        </DialogTitle>
                        <Button
                            onClick={() => {
                                if (props?.onOpenChange) {
                                    props?.onOpenChange(false);
                                }
                            }}
                            variant={'link'}
                            size={'icon'}
                            className="p-0 h-4 w-4 text-muted hover:text-white"
                        >
                            <FaTimes />
                        </Button>
                    </div>
                </DialogHeader>
                <div className="px-4 py-4">
                    <form onSubmit={onSubmit} className="relative">
                        <Input
                            value={value}
                            onChange={(e) => onValueChange?.(e.target.value)}
                            placeholder="What are you looking for?"
                            className="pr-8"
                        />
                        <div className="absolute top-[12px] right-[12px]">
                            <FaSearch className="text-muted" />
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SearchFormModal;
