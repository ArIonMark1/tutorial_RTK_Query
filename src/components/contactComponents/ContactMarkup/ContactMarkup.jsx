import { useDeleteContactMutation } from 'redux/features/contactSlice/contactSlice';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const ContactMarkup = ({ id, name, phone }) => {
  // ****************************************************************
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  // ****************************************************************
  async function handleDeleteContact(id) {
    // -------------------------------------------------
    const response = await deleteContact(id);
    // -------------------------------------------------
    if (response.data) {
      toast.success(`The notification ${name} successful deleted.`);
    }
    if (response.error) {
      toast.error(
        `Something went wrong... The notification ${name} could not be deleted.`
      );
    }
  }
  return (
    <li className="contactsList__row">
      <div className="container-content">
        <p>
          <span className="titleContent">Name:</span>
          <span className="content"> {name}</span>
        </p>
        <p>
          <span className="titleContent">Phone:</span>
          <span className="content"> {phone}</span>
        </p>
      </div>

      <button
        className="button"
        type="button"
        onClick={() => handleDeleteContact(id)}
        disabled={isLoading}
      >
        {isLoading && <PulseLoader size={5} color="white" />}
        Delete
      </button>
    </li>
  );
};

export default ContactMarkup;
