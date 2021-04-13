import { useEffect, useReducer } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface State<T> {
  status: 'init' | 'fetching' | 'error' | 'fetched'
  data?: T
  error?: string
}

type Action<T> =
  | { type: 'request' }
  | { type: 'success'; payload: T }
  | { type: 'failure'; payload: string };

function useFetch<T = unknown>(
  url?: string,
  options?: AxiosRequestConfig,
): State<T> {
  const initialState: State<T> = {
    status: 'init',
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'request':
        return { ...initialState, status: 'fetching' };
      case 'success':
        return { ...initialState, status: 'fetched', data: action.payload };
      case 'failure':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) {
      return;
    }

    const fetchData = async () => {
      dispatch({ type: 'request' });

      try {
        const response = await axios(url, options);

        dispatch({ type: 'success', payload: response.data });
      } catch (error) {
        dispatch({ type: 'failure', payload: error.message });
      }
    };

    fetchData();
  }, [url]);

  return state;
}

export default useFetch;
