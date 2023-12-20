
import {  useEffect, useState } from 'react';
import './styles/Button.css'
import axios from 'axios';





type Props = {
  names: string[];

};

export default function ImgContainer({ names }: Props) {
  const [idx, setIdx] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const fetchNames = async () => { 
    try {
      const res = await axios.get('https://alexgrey-api.onrender.com/names')
      setImages(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  
  
  
  useEffect( () => {
    fetchNames()
  }, []);

  const arrLength = names.length;
console.log(images)
  const handleIdxChange = (idx: number, side: 'next' | 'prev') => {
    setIdx(side === 'next' ? idx + 1 : idx - 1);
    if (idx === 0 && side === 'prev') {
      setIdx(arrLength - 1);
    }
    if (idx === arrLength - 1 && side === 'next') {
      setIdx(0);
    }
  };


 if(images.length === 0 ) return (<div>loading...</div>)

  return (
    <>
      <img src={`https://alexgrey-api.onrender.com/images/${images[idx]}`} />
      <div className="buttons-section">
        <button onClick={() => handleIdxChange(idx, 'next')}>Next</button>
        <button onClick={() => handleIdxChange(idx, 'prev')}>Prev</button>
      </div>
    </>
  );
}


