import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { SyncLoader } from 'react-spinners';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<SyncLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
