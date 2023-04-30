import { useState } from 'react';
import picsUrlArr from '/src/imgArr.js';
import './Slideshow.css'
import ImgContainer from './ImgContainer';
import Buttons from './Buttons';

function Slideshow() {
  const [srcForImg, setSrcForImg] = useState(picsUrlArr[0]);

  return (
   <>
   <div className='container-img'>
      <ImgContainer srcForImg={srcForImg} />
      
      <Buttons
        srcForImg={srcForImg}
        setSrcForImg={setSrcForImg}
      />
      </div>
    </>
  );
}

export default Slideshow;
