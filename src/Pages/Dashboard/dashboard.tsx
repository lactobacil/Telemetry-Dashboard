import React from 'react';
import NodeLinx from '../Images/NodeLinx-Edge.jpg';
import './dashboard.scss';
import Accelerometer from './Modules/Accelerometer';
import Info from './Modules/Info';
import Sidebar from './Sidebar/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <>
    <Sidebar></Sidebar>
     <div className="dashboardContainer">
        <Info></Info>
        <Accelerometer/>
        <Accelerometer/>
     </div>
    </>
  )
}

export default Dashboard;