import { useEffect } from 'react';

export const useResize = (onResize: () => void): void => {
    useEffect(() => {
        setTimeout(() => {
            onResize();
        }, 0);
        window.addEventListener('resize', onResize);
        window.addEventListener('orientationchange', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('orientationchange', onResize);
        };
    }, []);
};
