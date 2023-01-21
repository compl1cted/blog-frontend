import { Context } from './index';
import React, { useContext, useEffect } from 'react';
import './App.css';
import SignIn from './components/auth/sign_in';
import Layout from './components/layout';
import { observer } from 'mobx-react-lite';
import SignUp from './components/auth/sign_up';
import { Routes, Route } from "react-router-dom"
import AddPost from './components/add_post';
import Users from './components/users';
import Feed from "./components/feed"
import Profile from './components/profile';
import { redirect } from "react-router-dom";

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.CheckAuth();
    }
  }, []);

  if (store.isLoading) {
    return <div>Loading...</div>
  }

  if (!store.isAuth)
    return (
      <Routes>
        <Route path="/" element={<SignIn></SignIn>}></Route>
        <Route path="/sign_up" element={<SignUp></SignUp>}></Route>
      </Routes>
    );

  return (
    <>
      <Routes>

        <Route path='/' element={<AddPost />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Layout></Layout>
      { }
    </>
  );
}

export default observer(App);
