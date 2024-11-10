// useFetch.js
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    const getFetch = async () => {
      try {
        const resp = await fetch(url);

        if (!resp.ok) {
          throw new Error(`Error: ${resp.status} ${resp.statusText}`);
        }

        const data = await resp.json();
        setState({
          data,
          isLoading: false,
          hasError: false,
          error: null,
        });
      } catch (error) {
        setState({
          data: null,
          isLoading: false,
          hasError: true,
          error: {
            status: error.status || 500,
            message: error.message || "Error de servidor",
          },
        });
      }
    };

    getFetch();
  }, [url]);

  return state;
};
