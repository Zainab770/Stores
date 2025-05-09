import React from 'react';
import Top from './Top.js';

const Home5 = () => {

  return (
    <>
    <div>
      <video width="100%" height="500px" controls autoPlay  muted    style={{ objectFit: 'fill' }} > 
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
    <Top/>
    </>
  );
};

export default Home5;
