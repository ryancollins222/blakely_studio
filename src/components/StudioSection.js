import React from 'react';
import StudioPhotos from './StudioPhotos';

let StudioSection = (props) => {
  return (
    <section id="studio">
      <div className="row studio-row">
          <div className="col col-12 studio-img"></div>
      </div>
      <div className="row">
        <div className="col-12">
            <h2> <em>Studio</em></h2>
        </div>
        <div className="col-12">
            <div className="line"> </div>
        </div>

        {props.photos.map((photo, index) => 
          <StudioPhotos
            key={index}
            url={photo.url} 
          />
        )}
      </div>
    </section>
  );
}

export default StudioSection;