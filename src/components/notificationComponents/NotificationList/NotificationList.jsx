import { useGetNotificationsQuery } from 'redux/features/notificationSlice/notificationSlice';
import NotificationMarkup from '../NotificationMarkup/NotificationMarkup';
import { PulseLoader } from 'react-spinners';
import './NotificationList.scss';

const NotificationList = () => {
  const { data, isFetching, error, isError } = useGetNotificationsQuery();
  return (
    <>
      {isFetching && (
        <div className="loader">
          <PulseLoader
            size={20}
            margin={5}
            color={'#3f68b5d1'}
            aria-label="Loading Spinner"
          />
        </div>
      )}
      {isError && (
        <div>
          <h2>{error.status}</h2>
          <p>{error.error}</p>
        </div>
      )}
      {data && (
        <ul className="noteList">
          {data.map(note => (
            <NotificationMarkup key={note.id} noteData={note} />
          ))}
        </ul>
      )}
    </>
  );
};

export default NotificationList;
