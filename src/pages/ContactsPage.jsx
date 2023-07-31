import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from 'components/contactComponents/ContactList';
import ContactForm from 'components/contactComponents/ContactForm';
import { useGetAllContactsQuery } from 'redux/features/contactSlice/contactSlice';
import { useDeleteContactMutation } from 'redux/features/contactSlice/contactSlice';

const ContactsPage = () => {
  // ****************************************************************
  const { data, isFetching, isSuccess, isError, error } =
    useGetAllContactsQuery({
      refetchOnFocus: true,
      refetchOnReconnect: true,
    });
  // ****************************************************************
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  // ****************************************************************
  return (
    <div className="container">
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h2 className="headers">Phone Book</h2>
      <ContactForm />
      {isFetching && (
        <>
          <h3>Loading....</h3>
          <hr />
        </>
      )}
      {isError && (
        <div>
          <h3>{error}</h3>
        </div>
      )}
      {isLoading && (
        <>
          <h3>Deleting....</h3>
          <hr />
        </>
      )}

      {isSuccess && (
        <ContactList contacts={data} deleteContact={deleteContact} />
      )}

      <div className="contactContainer"></div>
    </div>
  );
};

export default ContactsPage;
