import React from 'react';
import './App.css';
import store from './store';
import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';

// Components
import HomePage from './Pages/HomePage/Home.Page';
import ComparePage from './Pages/ComparePage/Compare.Page';
import MyGaragePage from './Pages/MyGarage/MyGarage.Page';
import CarDetailsView from './Pages/InventoryPage/CarDetailsView/CarDetailsView';
import InventoryLayout from './Pages/InventoryPage/Layout/InventoryLayout';
import CardsView from './Pages/InventoryPage/CardsView/CardsView';


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
    element: <InventoryLayout/>,
    children: [
      {
        path: 'cars',
        element: <CardsView/>,
        children: []
      },
      {
        path: 'car/:id',
        element: <CarDetailsView/>,
        children: []
      }
    ]
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
