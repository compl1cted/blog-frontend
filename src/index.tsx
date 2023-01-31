import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthStore from './stores/auth-store';
import UserStore from './stores/user-store';
import { BrowserRouter } from 'react-router-dom';
import PostStore from './stores/post-store';

interface State {
  authStore: AuthStore;
  userStore: UserStore;
  postStore: PostStore;
}

const authStore = new AuthStore();
const userStore = new UserStore();
const postStore = new PostStore();

export const Context = createContext<State>({
  authStore,
  userStore,
  postStore
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      authStore,
      userStore,
      postStore
    }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);