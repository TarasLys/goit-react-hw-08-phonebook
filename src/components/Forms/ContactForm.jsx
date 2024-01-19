import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
//import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';
import { getTasks } from '../../redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { items } = useSelector(getTasks);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newContacts = {
      //id: nanoid(),
      name,
      number,
    };

    items.find(el => el.name === newContacts.name)
      ? alert(`${newContacts.name} is already in contact.`)
      : dispatch(addContact(newContacts));

    NewContact();
  };
  const NewContact = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.general}>
        <label htmlFor="">Name</label>
        <input
          className={css.allInput}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Введи ім'я для пошуку"
          required
        />
        <label htmlFor="">Phone</label>
        <input
          className={css.allInput}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Введи номер телефону"
          required
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};
