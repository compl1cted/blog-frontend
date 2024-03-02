import './App.css'
import { Context } from './main';
import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { AppTheme } from './AppTheme';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from './routes/router';
import { ThemeProvider, Typography } from '@mui/material';
import { Layout } from './components/layout/layout';

export const App = observer(() => {
  const { authStore } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      authStore.CheckAuth().catch(console.error);
    }
  }, []);

  if (authStore.isLoading) {
    return <Typography variant="h2" align='center'>Loading...</Typography>
  }

  const appRoutes = authStore.isAuth ? PrivateRoutes : PublicRoutes;
  
  const defaultRoute = authStore.isAuth ? "/feed" : "/sign_in";

  return (
    <ThemeProvider theme={AppTheme}>
      <BrowserRouter>
      <Layout isAuth={authStore.isAuth}>
        <Routes>
          {
            appRoutes.map(({ path, page: Page, props }) =>
              <Route key={path} path={path} element={<Page props={props}></Page>}></Route>
            )
          }
          <Route path="*" element={<Navigate to={defaultRoute} />}></Route>
        </Routes>
      </Layout>
      </BrowserRouter >
    </ThemeProvider>
  )
});
