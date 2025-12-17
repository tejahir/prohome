import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <body className='bg-blue-400'>
        <Navbar />
        <LeftSidebar />
        <Footer />
      </body>
    </>
  );
}