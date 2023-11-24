import axios from 'axios';
import { useEffect, useState } from 'react';

export const useNames = () => {
  const [names, setNames] = useState<string[]>([]);
  useEffect(() => {
    const fetchNames = async () => {
      const data = await axios.get('https://alexgrey-api.onrender.com/names');

      setNames(data.data);
    };
    fetchNames();
  }, []);

  return [names, setNames];
};

export default useNames;