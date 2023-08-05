import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from 'components/contactComponents/ContactList';
import ContactForm from 'components/contactComponents/ContactForm';

const ContactsPage = () => {
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
      <ContactList />
    </div>
  );
};

export default ContactsPage;
