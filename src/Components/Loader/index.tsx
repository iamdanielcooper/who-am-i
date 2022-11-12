import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';

function Loader() {
    const [loading, setLoading] = useState<string>('Loading');
    const interval: any = useRef(null);

    useEffect(() => {
        interval.current = setInterval(() => {
            setLoading(prevState =>
                prevState === 'Loading...' ? 'Loading' : prevState + '.'
            );
        }, 200);

        return () => {
            clearInterval(interval.current);
        };
    }, []);

    return <div className={styles.loader}>{loading}</div>;
}

export default Loader;
