import picsUrlArr from '/src/imgArr.js';
import './Buttons.css'

export default function Buttons({setSrcForImg, srcForImg}) {
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
    console.log(srcForImg)
  }
  
  
  
  
  
  
  
  return (
    <div className="button-container">
      <button onClick={() => toggleImgNext()}>Next Picture</button>
      <button onClick={() => toggleImgBack()}>Previous Picture</button>
    </div>
  );
}
