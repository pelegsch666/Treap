import { useState } from 'react';
import './App.css';
import ImgContainer from '/src/ImgContainer.jsx';
import picsUrlArr from '/src/imgArr.js';
import Buttons from './Buttons';

function App() {
  const [srcForImg, setSrcForImg] = useState(picsUrlArr[0]);
  function toggleImgBack() {
    let indexOfPic = picsUrlArr.indexOf(srcForImg);
    if (srcForImg === picsUrlArr[0]) {
      setSrcForImg(picsUrlArr[picsUrlArr.length - 1]);
    } else {
      setSrcForImg(picsUrlArr[indexOfPic - 1]);
    }
  }
  function toggleImgNext() {
    let indexOfPic = picsUrlArr.indexOf(srcForImg);
    if (indexOfPic === picsUrlArr.length - 1) {
      setSrcForImg(picsUrlArr[0]);
    } else {
      setSrcForImg(picsUrlArr[indexOfPic + 1]);
    }
  }

  return (
    <>
      <ImgContainer srcForImg={srcForImg} />
      <Buttons
        setSrcForImg={setSrcForImg}
        toggleImgBack={toggleImgBack}
        toggleImgNext={toggleImgNext}
      />
    </>
  );
}

export default App;
