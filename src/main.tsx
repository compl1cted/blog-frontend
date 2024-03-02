import './index.css'
import { App } from './App.tsx'
import { createRoot } from 'react-dom/client'
import { createContext } from 'react';
import { AuthStore } from './stores/auth.store';
import { UserStore } from './stores/user.store';
import { PostStore } from './stores/post.store';
import { State } from './types/state.interface';
import { CommentStore } from './stores/comment.store';

const authStore = new AuthStore();
const userStore = new UserStore();
const postStore = new PostStore();
const commentStore = new CommentStore();

export const Context = createContext<State>({
  authStore,
  userStore,
  postStore,
  commentStore
});

createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{
    authStore,
    userStore,
    postStore,
    commentStore
  }}>
    <App />
  </Context.Provider>
);
