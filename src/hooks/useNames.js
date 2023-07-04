import axios from 'axios';
import { useEffect, useState } from 'react';

export const useNames = () => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    const fetchNames = async () => {
      const data = await axios.get('http://localhost:4000/names');
      console.log(data)
      setNames(data.data);
    };
    fetchNames();
  }, []);

  return [names, setNames];
};

export default useNames;