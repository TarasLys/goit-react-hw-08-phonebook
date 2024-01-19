import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/authSlice';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <div
      className={css.reg_div}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {' '}
      <h1>PLEASE LOGIN</h1>
      <form className={css.common} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Email:</span>
        </label>
        <input
          className={css.allInput}
          {...register('email', { required: true })}
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && <span>This field is required</span>}

        <label>
          <span>Password:</span>
        </label>
        <input
          className={css.allInput}
          {...register('password', { required: true, minLength: 8 })}
          type="password"
          placeholder="Enter your password"
        />
        {errors.password && <span>This field is required</span>}

        <button className={css.btn} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
