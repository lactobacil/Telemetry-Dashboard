import React from 'react';
import Tab from '../Modules/Tab';
import './Sidebar.scss';


const Sidebar: React.FC = () => {
  return (
    <>
     <div className="sidebarContainer">
        <Tab/>
        <Tab/>
     </div>
    </>
  )
}

export default Sidebar;