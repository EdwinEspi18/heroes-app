import { useEffect, useReducer } from 'react';
import auth from './auth/auth.reducer';
import authContext from './auth/AuthContext';
import AppRouter from './routers/AppRouter';

const init = () => {
  return JSON.parse(window.localStorage.getItem('user')) || { logged: false };
};

const App = () => {
  const [user, dispatch] = useReducer(auth, {}, init);

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  return (
    <div>
      <authContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </authContext.Provider>
    </div>
  );
};

export default App;
