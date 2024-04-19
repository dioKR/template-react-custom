import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <main>
      <div>header</div>
      <Outlet />
    </main>
  );
}
