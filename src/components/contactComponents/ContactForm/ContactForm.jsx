import { useCreateContactMutation } from 'redux/features/contactSlice/contactSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import './ContactForm.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [createContact, { isLoading }] = useCreateContactMutation();

  const formSubmit = async evt => {
    evt.preventDefault();

    const response = await createContact({ name, phone });
    if (response.data) {
      toast.success(`${name} added to contacts.`);
    }
    if (response.error) {
      toast.error(
        `Something went wrong... Additing contact ${name} was rejected.`
      );
    }

    setName('');
    setPhone('');
  };

  // console.log('isLoading: ', isLoading); // true якщо мутація запущена та очікується відповідь
  // console.log('isSuccess: ', isSuccess); // true якщо остання мутація(обробка) має дані із успішного запиту

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
      <button className="button" type="submit" disabled={isLoading}>
        {isLoading && <PulseLoader size={5} color="white" />}
        <span>Add contact</span>
      </button>
    </form>
  );
};

export default ContactForm;
