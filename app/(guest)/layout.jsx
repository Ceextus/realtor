import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const layout = ({children}) => {
  return (
    <main>
    <Navbar/>
      {children}
      <Footer/>
    </main>

  );
}

export default layout;
