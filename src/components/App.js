import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from '../data.json';

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="scroll-container">
        <Main
          artists={data.artists}
          studioPhotos={data.studioPhotos}
         />
        <Footer />  
      </div>  
    </div>
  );
}

export default App;
