import { useCreateContactMutation } from 'redux/features/contactSlice/contactSlice';
import { useState } from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [createContact] = useCreateContactMutation();

  const formSubmit = evt => {
    evt.preventDefault();
    // console.log(evt.currentTarget.elements.name.value);

    createContact({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <form id="form" className="contactForm form" onSubmit={formSubmit}>
      <label className="label" htmlFor="name">
        Name
        <br />
        <input
          id="name"
          className="nameField"
          type="text"
          name="name"
          value={name}
          onChange={evt => setName(evt.currentTarget.value)}
          placeholder="Enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="label" htmlFor="phone">
        Number
        <br />
        <input
          className="nameField"
          id="phone"
          type="tel"
          name="phone"
          value={phone}
          onChange={evt => setPhone(evt.currentTarget.value)}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="button" type="submit">
        <span>Add contact</span>
      </button>
    </form>
  );
};

export default ContactForm;
