import { useEffect, useState } from 'react';
    import './styles/Slideshow.css';
    import ImgContainer from './ImgContainer';
    import { useNames } from './hooks/useNames';

  


  
  


    

    function Slideshow() {
      const [names, setNames] = useState<string[]>([]);
      const fetchNames = async () => {
        const namesFromData =  useNames();
       if(namesFromData) setNames(namesFromData);
      }
      useEffect(() => {
        fetchNames();
      },[])

      return (
        <>
          <div className="container-img">
            <ImgContainer names={names} />
          </div>
        </>
      );
    }

    export default Slideshow;

