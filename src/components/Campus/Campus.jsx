import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/sa.jpeg';
import gallery_2 from '../../assets/room.jpeg';
import gallery_3 from '../../assets/placement.jpeg';
import gallery_4 from '../../assets/lunch.jpeg';
import white_arrow from '../../assets/white-arrow.png';

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="Campus 1" />
        <img src={gallery_2} alt="Campus 2" />
        <img src={gallery_3} alt="Campus 3" />
        <img src={gallery_4} alt="Campus 4" />
      </div>
      <button className="btn">
        See More Here
        <img src={white_arrow} alt="Arrow Icon" />
      </button>
    </div>
  );
};

export default Campus;
