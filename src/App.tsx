import React from 'react';
import './App.css';
import store from './store';
import { Navigate, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Components
import HomeView from './Pages/Home/HomeView';
import CompareView from './Pages/Compare/CompareView';
import MyGarageView from './Pages/MyGarage/MyGarageView';
import CarDetailsView from './Pages/Inventory/CarDetailsView/CarDetailsView';
import InventoryLayout from './Pages/Inventory/InventoryLayout/InventoryLayout';
import CardsView from './Pages/Inventory/CardsView/CardsView';
import MainLayout from './Pages/Layout/MainLayout';
import OrderCarView from './Pages/Inventory/OrderCar/OrderCarView';


const App:React.FC = (): JSX.Element => {

  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomeView /> },
      { path: 'inventory', element: <Navigate to='inventory/cars'/> },
      { path: 'myGarage', element: <MyGarageView/> },
      { path: 'compare', element: <CompareView /> }
    ]
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
        path: 'car/:carId',
        element: <CarDetailsView/>,
        children: []
      },
      {
        path: 'order/:carId',
        element: <OrderCarView/>,
        children: []
      }
    ]
  };

  const myGarageRoute = {
    path: 'myGarage',
    element: <MyGarageView/>,
    children: []
  };

  const routing = useRoutes([mainRoutes,inventoryRoute,myGarageRoute]);
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        {routing}
      </Provider>
    </DndProvider>
  );
}

export default App;
