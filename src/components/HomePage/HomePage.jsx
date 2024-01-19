import React from 'react';
import image from '../../image/1.jpg';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <img className={css.img} src={image} alt="" />
      </div>
    </>
  );
};

export default HomePage;
