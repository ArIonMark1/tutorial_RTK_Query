import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NotificationForm from 'components/notificationComponents/NotificationForm/NotificationForm';
import NotificationList from 'components/notificationComponents/NotificationList/NotificationList';

const NotificationsPage = () => {
  return (
    <div className="container">
      <h1 className="headers">Notifications Page</h1>
      <div>
        <ToastContainer autoClose={1000} />
        <NotificationForm />
        <NotificationList />
      </div>
    </div>
  );
};

export default NotificationsPage;
