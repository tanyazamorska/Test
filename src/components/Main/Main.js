import React from 'react';
import Header from './Header';
import Footer from './Footer';

import './style.css';


function Main() {
  return (
    <div className="main-container">
      <Header/>
      <div className="card form">
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
          </ul>
        </div>
      </div>
      <div className="row empty"></div>
      <div className="row justify-content-md-center yellow-background">
      </div>
      <div className="row empty"></div>
     <Footer/>
    </div>
  );
}
export default Main;

