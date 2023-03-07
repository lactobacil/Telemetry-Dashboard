import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Calendar from './Pages/Calendar/Calendar';
import Currency from './Pages/Currency';
import Login from './Pages/Login/login';
import Header from './Components/Header/index';
import Title from './Title/title';

function App(): JSX.Element {
  const page = [
    {
      path: '/calendar',
      Component:
        <div className="Container">
          <Header />
          <div className="PageContainer">
            <Calendar />
          </div>
        </div>
    }
  ]
  return (

    <Routes>
      {
        page.map((el, i) => (
          <Route key={i} path={el.path} element={el.Component} >
          </Route>
        ))
      }
    </Routes>
  );
}

export default App;
