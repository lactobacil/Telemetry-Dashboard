import React from 'react';
import NodeLinx from '../Images/NodeLinx-Edge.jpg';
import './Info.scss';

const Info: React.FC = () => {
  return (
    <>
     <div className="infoContainer">
        <div className="TitleText"> Toyota Coaster</div>
        <div className="PlateNumber"> F13204</div>
        <div className="Line"></div>
     </div>
    </>
  )
}

export default Info;