import { useState } from 'react';
import './opening.css';
import Slideshow from './Slideshow';

function OpeningPage() {
  const [isStart, setIsStart] = useState(false);
  if (isStart === false) {
    return (
      <div className="container">
        <h1>This app was made to make your trip more meaningful </h1>
        
        <button onClick={() => setIsStart(true)}>mann</button>
      </div>
    );
  } else {
    return <Slideshow/>;
  }
}

export default OpeningPage;
