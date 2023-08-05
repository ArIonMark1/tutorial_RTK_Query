import { useGetNotificationsQuery } from 'redux/features/notificationSlice/notificationSlice';
import NotificationMarkup from '../NotificationMarkup/NotificationMarkup';

const NotificationList = () => {
  const { data, isFetching, error, isError } = useGetNotificationsQuery();
  return (
    <>
      <hr />
      <p>Notification list</p>
      <hr />

      {isFetching && <div>Loading....</div>}
      {isError && (
        <div>
          <h2>{error.status}</h2>
          <p>{error.error}</p>
        </div>
      )}
      {data &&
        data.map(note => <NotificationMarkup key={note.id} noteData={note} />)}
    </>
  );
};

export default NotificationList;
