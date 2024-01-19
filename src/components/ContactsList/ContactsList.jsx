import Contacts from '../Contacts/Contacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilterContacts,
  selectIsLoading,
  selectError,
} from '../../redux/selectors';
import { fetchContacts, deleteContact } from '../../redux/contactsSlice';

const ContactsList = () => {
  const filterContacts = useSelector(selectFilterContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {filterContacts.map((el, index) => (
        <Contacts contacts={el} key={index} deleteContacts={deleteContacts} />
      ))}
    </>
  );
};
export default ContactsList;
