import { useCreateNotificationMutation } from 'redux/features/notificationSlice/notificationSlice';
import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import './NotificationForm.scss';
import { useState } from 'react';

const NotificationForm = () => {
  const [note, setNote] = useState('');

  const [noteCreator, { isLoading }] = useCreateNotificationMutation();

  async function onSubmitNote(evt) {
    evt.preventDefault();
    const time = new Date();
    console.log('Current time: ', time.toLocaleString());
    const response = await noteCreator({
      note,
      createdAt: time.toLocaleString(),
    });
    if (response.error) {
      toast.error('Note failed to be added');
    }
    if (response.data) {
      toast.success('Note added successfully');
    }

    setNote('');
  }

  return (
    <>
      <form className=" noteForm form" onSubmit={onSubmitNote}>
        <label className="label" htmlFor="note">
          <input
            className="nameField"
            name="note"
            type="text"
            value={note}
            onChange={evt => setNote(evt.target.value)}
            placeholder="Enter your note"
          />
        </label>

        <button className="button" type="submit" disabled={isLoading}>
          {isLoading && <PulseLoader size={5} color="white" />}
          Create
        </button>
      </form>
    </>
  );
};

export default NotificationForm;
