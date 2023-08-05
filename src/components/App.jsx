import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const PokemonsPage = lazy(() => import('../pages/PokemonsPage'));
const NotificationsPage = lazy(() => import('../pages/NotificationsPage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/pokemons" element={<PokemonsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          
        </Route>
      </Routes>
    </div>
  );
};
