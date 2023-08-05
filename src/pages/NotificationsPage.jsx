import NotificationForm from 'components/notificationComponents/NotificationForm/NotificationForm';
import NotificationList from 'components/notificationComponents/NotificationList/NotificationList';

const NotificationsPage = () => {
  return (
    <>
      <h1 className="headers">Notifications Page</h1>
      <div>
        <NotificationForm />
        <NotificationList />
      </div>
    </>
  );
};

export default NotificationsPage;
