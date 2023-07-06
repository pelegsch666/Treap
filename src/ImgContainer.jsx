import './ImgContainer.css';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function ImgContainer({ names }) {
  const [idx, setIdx] = useState(0);
  // eslint-disable-next-line react/prop-types
  const arrLength = names.length;

  const handleIdxChange = (idx, side) => {
    setIdx(side === 'next' ? idx + 1 : idx - 1);
    if (idx === 0 && side === 'prev') {
      setIdx(arrLength - 1);
    }
    if (idx === arrLength - 1 && side === 'next') {
      setIdx(0);
    }
  };

  return (
    <>
      <img src={`http://localhost:4000/images/${names[idx]}`}></img>
      <div className="buttons-section">
        <button onClick={() => handleIdxChange(idx, 'next')}>Next</button>
        <button onClick={() => handleIdxChange(idx, 'prev')}>Prev</button>
      </div>
    </>
  );
}
