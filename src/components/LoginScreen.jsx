import { useContext } from 'react';
import AuthContext from '../auth/AuthContext';
import { types } from '../types/types';
import useForm from '../hooks/useForm';

import { useHistory } from 'react-router-dom';
const LoginScreen = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);

  const [values, handleChange] = useForm({ name: '' });

  const handleClick = () => {
    const path = window.localStorage.getItem('lastPath') || '/';
    dispatch({ type: types.login, payload: { name: values.name } });
    history.replace(path);
  };
  return (
    <div className="container-fluid mt-5 row justify-content-center">
      <h1>Login</h1>
      <hr />
      <div className="col-5">
        <input
          type="text"
          placeholder="Escribe tu nombre"
          className="form-control"
          name="name"
          value={values.name}
          onChange={handleChange}
          autoComplete="false"
        />
      </div>
      <button
        className="btn btn-primary d-block w-25 justify-content-center"
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
