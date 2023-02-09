import { App } from './App';
import './index.css';
import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { AuthStore } from './stores/auth.store';
import { UserStore } from './stores/user.store';
import { PostStore } from './stores/post.store';
import { State } from './types/state.interface';

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
  <Context.Provider value={{
    authStore,
    userStore,
    postStore
  }}>
    <App />
  </Context.Provider>
);