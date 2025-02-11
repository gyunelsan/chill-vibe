import React from 'react';
import panelb2 from '../assets/images/panelb2.jpg';
import panelb7 from '../assets/images/panelb7.jpg';
import panelr2 from '../assets/images/panelr2.jpg';
import panelr3 from '../assets/images/panelr3.jpg';

const Pannel = () => {
  const images = [panelb2, panelr2, panelr3, panelb7];

  return (
    <div className="panel-section">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt={`Panel ${index + 1}`} />
          <button className="image-button">Shop Now</button>
        </div>
      ))}
    </div>
  );
};

export default Pannel;
