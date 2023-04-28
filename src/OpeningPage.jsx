import { useState } from 'react';

import './opening.css';
import Slideshow from './Slideshow';
function OpeningPage() {
  const [isStart, setIsStart] = useState(false);
  if (isStart === false) {
    return (
      <div className="container">
        <h1>Hello </h1>
        <button onClick={() => setIsStart(true)}>mann</button>
      </div>
    );
  } else {
    return <Slideshow/>;
  }
}

export default OpeningPage;
