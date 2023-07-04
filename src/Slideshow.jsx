
// import picsUrlArr from '/src/imgArr.js';
import './Slideshow.css';
import ImgContainer from './ImgContainer';
// import Buttons from './Buttons';
import useNames from './hooks/useNames';

function Slideshow() {
  
  const [names] = useNames();
  console.log(names)
  // Update imageUrl when arrOfImagesPaths changes
  
  

  return (
    <>
      <div className="container-img">
        <ImgContainer names={names} />

      </div>
    </>
  );
}

export default Slideshow;
