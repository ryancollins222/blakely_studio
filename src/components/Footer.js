import React from 'react';

let Footer = () => {
  return (
    <footer className="row">
      {/* email form */}
      <div className="col-md-6">
        <form action="">
          <label htmlFor="#email">Subscribe: </label>
          <input type="email" className="email" id="email" placeholder="name@email.com"/>
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* font awesome icons */}
      <div className="col-md-6 footer-links">
        <a href="#">
          <i className="fab fa-facebook-square fa-2x mx-3"></i>
        </a>  
        <a href="#">
          <i className="fab fa-instagram-square fa-2x mx-3"></i>
        </a>  
        <a href="#">
          <i className="fab fa-soundcloud fa-2x mx-3"></i>
        </a>  
      </div>
    </footer>
  );
}

export default Footer;