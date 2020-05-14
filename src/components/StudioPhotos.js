import React from 'react';

let StudioPhotos = (props) => {
  let style = {
    backgroundImage: `url(${props.url})`
  }
  return (
    <div className="col col-9 col-lg-4">
      <div className="studio" style={style}></div>
    </div>
  );
}

export default StudioPhotos;