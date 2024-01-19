import css from './Contacts.module.css';

const Contacts = ({ contacts, deleteContacts }) => {
  console.log(contacts);
  return (
    <>
      <div className={css.general}>
        <li className={css.list}>
          {contacts.name}: {contacts.number}
        </li>

        <br />
        <button className={css.btn} onClick={() => deleteContacts(contacts.id)}>
          Delete
        </button>
      </div>
    </>
  );
};
export default Contacts;
