
import { Dispatch, SetStateAction, useState } from 'react';
import './styles/Button.css'





type Props = {
  names: string[];

};

export default function ImgContainer({ names }: Props) {
  const [idx, setIdx] = useState(0);
  const arrLength = names.length;

  const handleIdxChange = (idx: number, side: 'next' | 'prev') => {
    setIdx(side === 'next' ? idx + 1 : idx - 1);
    if (idx === 0 && side === 'prev') {
      setIdx(arrLength - 1);
    }
    if (idx === arrLength - 1 && side === 'next') {
      setIdx(0);
    }
  };


 if(names.length === 0 ) return (<div>loading...</div>)

  return (
    <>
      <img src={`https://alexgrey-api.onrender.com/images/${names[idx]}`} />
      <div className="buttons-section">
        <button onClick={() => handleIdxChange(idx, 'next')}>Next</button>
        <button onClick={() => handleIdxChange(idx, 'prev')}>Prev</button>
      </div>
    </>
  );
}


