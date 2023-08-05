import './ContactList.scss';
const ContactList = ({ contacts, deleteAction }) => {
  console.log(contacts);
  return (
    <div>
      <div className="contactsContainer">
        <h2 className="headers">Contacts</h2>
        <ul className="contactsList">
          {contacts.map(contact => (
            <li key={contact.id} className="contactsList__row">
              <div className="container-content">
                <p>
                  <span className="titleContent">Name:</span>
                  <span className="content"> {contact.name}</span>
                </p>
                <p>
                  <span className="titleContent">Phone:</span>
                  <span className="content"> {contact.phone}</span>
                </p>
              </div>

              <button
                className="button"
                type="button"
                onClick={() => deleteAction(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;
