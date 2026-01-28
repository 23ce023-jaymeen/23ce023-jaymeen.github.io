import { useState, useEffect } from "react";

const GIST_BASE_URL =
  "https://gist.githubusercontent.com/JaymeenDevatka/457182dbd52b720f5669093f95073035/raw";

export const useGistData = (fileName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${GIST_BASE_URL}/${fileName}`);
        if (!response.ok) throw new Error(`Failed to fetch ${fileName}`);
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (err) {
        setError(err.message);
        console.error(`Error fetching ${fileName}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fileName]);

  return { data, loading, error };
};
