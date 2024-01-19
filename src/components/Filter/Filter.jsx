import css from './Filter.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlise';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <div className={css.general}>
      <label htmlFor="">Find contacts by name</label>
      <input
        className={css.allInput}
        type="text"
        onChange={handleChange}
        placeholder="Пошук контактів за ім'ям"
      />
    </div>
  );
};
export default Filter;
