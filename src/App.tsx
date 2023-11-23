import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import HomePage from './Pages/HomePage/Home.Page';
import ComparePage from './Pages/ComparePage/Compare.Page';
import InventoryPage from './Pages/InventoryPage/Inventory.Page';
import MyGaragePage from './Pages/MyGarage/MyGarage.Page';
import store from './store';
import { Provider } from 'react-redux';

const App:React.FC = (): JSX.Element => {

  const homeRoute = {
    path: '/',
    element: <HomePage/>,
    children: []
  };

  const compareRoute = {
    path: 'compare',
    element: <ComparePage/>,
    children: []
  };

  const inventoryRoute = {
    path: 'inventory',
    element: <InventoryPage/>,
    children: []
  };

  const myGarageRoute = {
    path: 'myGarage',
    element: <MyGaragePage/>,
    children: []
  };

  const routing = useRoutes([homeRoute,compareRoute, inventoryRoute, myGarageRoute]);
  return (
    <Provider store={store}>
      {routing}
    </Provider>
  );
}

export default App;
