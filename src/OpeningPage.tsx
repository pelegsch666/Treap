import { useState } from 'react';
import './styles/OpeningPage.css';
import Slideshow from './Slideshow';

function OpeningPage() {
  const [isStart, setIsStart] = useState(false);
  if (isStart === false) {
    return (
      <div className="container">
        <h1>This app was made to gather must beautiful visuals</h1>
        
        <button onClick={() => setIsStart(true)}>Start</button>
      </div>
    );
  } else {
    return <Slideshow/>;
  }
}

export default OpeningPage;
