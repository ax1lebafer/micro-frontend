import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <main className="main">
      <h1>This is Micro-Frontend Architecture</h1>

      <Link to="/admin">Admin</Link>
      <br />
      <Link to="/shop">Shop</Link>

      <Outlet />
    </main>
  );
};
