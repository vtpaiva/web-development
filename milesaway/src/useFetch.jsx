// Baseado em https://www.freecodecamp.org/news/json-server-for-frontend-development/

import { useState, useEffect } from 'react';

const useFetch = (url, requestOptions) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            if(url === undefined)
                return;
            fetch(url, requestOptions)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching users data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, Math.floor(Math.random() * 1000)+500);
    }, [url, requestOptions]);

    return { data, isPending, error };
}

const useFetchPut = (url, body) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(url === undefined)
            return;
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching users data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, Math.floor(Math.random() * 1000));
    }, [url]);

    useEffect(() => {
        setTimeout(() => {
            while(data === null)
                return;
            const mergedData = {...data, ...body};
            if(JSON.stringify(mergedData) === JSON.stringify(data))
                return;
            const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(mergedData)
            };
            fetch(url, requestOptions)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching users data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, Math.floor(Math.random() * 100));
    }, [data, body]);

    return { data, isPending, error };
}

export default useFetch;
export { useFetchPut, useFetch };
