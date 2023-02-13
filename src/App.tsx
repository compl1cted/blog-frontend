import './App.css';
import { Context } from './index';
import { useContext, useEffect } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from './routes/router';
import { observer } from 'mobx-react-lite';
import Navbar from './components/navbar';
import { IUser } from './models/interfaces/IUser';

export const App = observer(() => {
  const { authStore } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      authStore.CheckAuth();
    }
  }, []);

  if (authStore.isLoading) {
    return <div>Loading...</div>
  }

  const AppRoutes = authStore.isAuth ? PrivateRoutes : PublicRoutes;
  const DefaultRoute = authStore.isAuth ? "/feed" : "/sign_in";

  return (
    <BrowserRouter>
      <Routes>
        {
          AppRoutes.map(({ path, component: Component, props }) =>
            <Route key={path} path={path} element={<Component props={props}></Component>}></Route>
          )
        }
        <Route key={AppRoutes.length + 1} path="*" element={<Navigate to={DefaultRoute} />}></Route>
      </Routes>
      {authStore.isAuth ? <Navbar></Navbar> : null}
    </BrowserRouter >
  );
}
);