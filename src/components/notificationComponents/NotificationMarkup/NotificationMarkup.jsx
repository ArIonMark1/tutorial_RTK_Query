import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import { useDeleteNotificationMutation } from 'redux/features/notificationSlice/notificationSlice';
import './NotificationMarkup.scss';

const NotificationMarkup = ({ noteData }) => {
  const [deleteNote, { isLoading }] = useDeleteNotificationMutation(); // tuple[function, option(info about mutation result )]

  const deleteNotification = async () => {
    let name = noteData.note;
    // ----------------------------------------------------------------
    const response = await deleteNote(noteData.id);
    // ----------------------------------------------------------------
    if (response.data) {
      toast.success(`The notification ${name} successful deleted.`);
    }
    if (response.error) {
      toast.error(
        `Something went wrong... The notification ${name} could not be deleted.`
      );
    }
    name = '';
  };

  return (
    <>
      <li className="noteList__row">
        <div className="note-content">
          <p>
            <span className="titleContent">Note: </span>
            <span className="content"> {noteData.note}</span>
          </p>
          <p>
            <span className="titleContent dataContent">Created: </span>
            <span className="content dataContent"> {noteData.createdAt}</span>
          </p>
        </div>

        <button
          className="button"
          type="submit"
          disabled={isLoading}
          onClick={deleteNotification}
        >
          {isLoading && <PulseLoader size={5} color="white" />}
          Delete
        </button>
      </li>
    </>
  );
};

export default NotificationMarkup;
