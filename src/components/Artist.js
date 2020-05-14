import React from 'react';


let Artist = (props) => {
  let style = {
    backgroundImage: `url(${props.img})`
  }

  return (
    <div className="col col-9 col-lg-4 artist-col">
      <div className="artist-container">
        <a href={props.url}>
          <h3>{props.name}</h3>
          <div className='line'></div>
          <div className='artist-pic' style={style}></div>
        </a>
      </div>
    </div>
  );
}

export default Artist;