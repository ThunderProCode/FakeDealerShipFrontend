import React from 'react';
import './App.css';
import { RootState } from './store';
import { Navigate, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Components
import HomeView from './Pages/Home/HomeView';
import CompareView from './Pages/Compare/CompareView';
import MyGarageView from './Pages/MyGarage/MyGarageView';
import CarDetailsView from './Pages/Inventory/Views/CarDetailsView/CarDetailsView';
import InventoryLayout from './Pages/Inventory/Layout/InventoryLayout';
import CardsView from './Pages/Inventory/Views/CardsView/CardsView';
import MainLayout from './Pages/Layout/MainLayout';
import OrderCarView from './Pages/Inventory/Views/OrderCar/OrderCarView';
import LoginView from './Pages/Admin/Views/LoginView/LoginView';
import AdminLayout from './Pages/Admin/Layout/AdminLayout';
import ManageCarsView from './Pages/Admin/Views/ManageCarsView/ManageCarsView';
import ManageOrdersView from './Pages/Admin/Views/ManageOrdersView/ManageOrdersView';
import NotFound from './Pages/NotFound/NotFound';


const App:React.FC = (): JSX.Element => {

  const { userData } = useSelector((state:RootState) => state.auth);

  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '*', element: <NotFound /> },
      { path: '/', element: <HomeView /> },
      { path: 'inventory', element: <Navigate to='inventory/cars'/> },
      { path: 'myGarage', element: <MyGarageView/> },
      { path: 'compare', element: <CompareView /> },
      { path: 'admin', element: <Navigate to='login' /> }
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

  const adminRoute = {
    path: 'admin',
    element: <AdminLayout/>,
    children: [
      {
        path: 'login',
        element: <LoginView/>,
        children: []
      },
      {
        path: 'inventory',
        element: <ManageCarsView userData={userData} />,
        children: [],
      },
      {
        path: 'orders',
        element: <ManageOrdersView userData={userData} />,
        children: [],
      }
    ]
  }

  const routing = useRoutes([mainRoutes,inventoryRoute,myGarageRoute, adminRoute]);

  return (
    <DndProvider backend={HTML5Backend}>
      {routing}
    </DndProvider>
  );
}

export default App;
