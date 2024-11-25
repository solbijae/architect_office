import { useState, useEffect } from 'react';
import { Project } from 'types/projects';

function useFetchData(url: string) {
  const [data, setData] = useState<Project[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, [url]);

  return { data, error };
}

export default useFetchData;
