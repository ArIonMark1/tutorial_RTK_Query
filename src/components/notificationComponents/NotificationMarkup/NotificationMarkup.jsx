import { useDeleteNotificationMutation } from 'redux/features/notificationSlice/notificationSlice';

const NotificationMarkup = ({ noteData }) => {
  //   const [deleteObj, { isLoading }] = useDeleteNotificationMutation();
  //   console.log(noteData); // {createdAt: '2023-08-01T03:11:57.456Z', note: 'note 15', id: '15'}
  return (
    <>
      <div>
        {/* {isLoading && <p>{isLoading}</p>} */}

        <p>{noteData.note}</p>
        <p>{noteData.createdAt}</p>
        <button
          type="submit"
          // onClick={deleteObj(noteData.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default NotificationMarkup;
