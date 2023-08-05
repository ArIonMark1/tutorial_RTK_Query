import { useGetAllContactsQuery } from 'redux/features/contactSlice/contactSlice';
import { PulseLoader } from 'react-spinners';
import ContactMarkup from '../ContactMarkup';
import './ContactList.scss';

const ContactList = () => {
  // ****************************************************************
  const {
    data: contacts,
    isFetching,
    isError,
    error,
  } = useGetAllContactsQuery({
    skip: false,
    pollingInterval: 2000,
    refetchOnMountOrArgChange: 2000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  // ****************************************************************

  return (
    <>
      {isFetching && (
        <div className="loader">
          <PulseLoader
            size={20}
            margin={5}
            color={'#3f68b5d1'}
            aria-label="Loading Spinner"
          />
        </div>
      )}
      {isError && (
        <div>
          <h3 className="headers">
            {error.status}. {error.error}
          </h3>
        </div>
      )}
      {contacts && (
        <div className="contactsContainer">
          <h2 className="headers">Contacts</h2>
          <ul className="contactsList">
            {contacts.map(contact => (
              <ContactMarkup key={contact.id} {...contact} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ContactList;
