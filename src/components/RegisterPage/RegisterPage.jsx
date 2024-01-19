import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/authSlice';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {' '}
      <h1>PLEASE REGISTER</h1>
      <form className={css.common} onSubmit={handleSubmit(onSubmit)}>
        <label></label>
        <span>Email:</span>
        <input
          className={css.allInput}
          placeholder="Enter your email"
          {...register('email', { required: true })}
          type="email"
        />
        {errors.email && <span>This field is required</span>}

        <label></label>
        <span>Name:</span>
        <input
          className={css.allInput}
          placeholder="Enter your name"
          {...register('name', { required: true })}
          type="name"
        />
        {errors.name && <span>This field is required</span>}

        <label></label>
        <span>Password:</span>
        <input
          className={css.allInput}
          placeholder="Enter a password of at least 8 characters"
          {...register('password', { required: true, minLength: 8 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}

        <button className={css.btn} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
