import { useState, useEffect } from 'react';

export type TJsonFetchResult = {
  data?: {
    status: string
  };
  loading?: boolean;
  error?: Error | null;
}

type TJsonFetchOptions = 'data' | 'loading' | 'error';

export const useJsonFetch = (
  url: string,
  opts: TJsonFetchOptions
): [TJsonFetchResult] => {

  const [data, setData] = useState<{ status: string }>({ status: 'no data' });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url + '/' + opts);

        const data1 = await response.json();

        setData(data1);

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

      } catch (err) {
          setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  }, [url, opts]);

  return [ {data, loading, error} ] ;
}
