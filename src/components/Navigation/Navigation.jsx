import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthAuthenticated } from '../../redux/selectors';
import { logOutThunk } from '../../redux/authSlice';
import css from './Navigation.module.css';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <header className={css.distance}>
      <nav>
        <ul className={css.links}>
          <li>
            <NavLink className={`${css.li} ${css.li_width}`} to="/">
              PHONE BOOK
            </NavLink>
          </li>

          {authenticated ? (
            <>
              <li>
                <NavLink className={css.li} to="/contacts">
                  Contacts
                </NavLink>
              </li>
              <li className={`${css.link} ${css.li}`} onClick={onLogOut}>
                Log Out
              </li>
            </>
          ) : (
            <>
              <li className={css.link}>
                <NavLink className={css.li} to="/register">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink className={css.li} to="/login">
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
