import React, {component} from 'react';

class Header extends React.Component {

  handleClick = () => {
    let nav = document.querySelector('nav');
    let icon = nav.querySelector('i');
    icon.classList.toggle('turn90');
    nav.classList.toggle('expanded');
  }  

  render() {
    return (
      <header>
        <nav>
          <div className="row" >
            <div className="col navlink-div" onClick={this.handleClick}>
              <div className="">
                <i className="fas fa-sliders-h text-white fa-2x bars-icon"></i>
              </div>  
              {/* navbar links */}
              <div className=""> 
                <ul>
                  <li>
                    <a href="#artists">Artists</a>
                  </li>
                  <li>
                    <a href="#studio">Studio</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                </ul>
              </div>
            </div>  
            {/* navbar title  */}
            <div className="col">
              <a href="#" className="nav-link">
                <img src="img/logo.png" alt="Blakely Studio logo" className="logo"/>
              </a>  
            </div>  
            <div className="col"></div> 
          </div>  
        </nav>
      </header>
    );
  }
}

export default Header;