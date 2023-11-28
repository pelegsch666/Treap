import { useEffect, useState } from 'react';
import './styles/Slideshow.css';
import ImgContainer from './ImgContainer';

function Slideshow() {
  const [names, setNames] = useState<string[]>([]);

  return (
    <>
      <div className="container-img">
        <ImgContainer names={names} />
      </div>
    </>
  );
}

export default Slideshow;
