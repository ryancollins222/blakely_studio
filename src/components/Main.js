import React from 'react';
import ArtistsSection from './ArtistsSection';
import StudioSection from './StudioSection';
import About from './About';

let Main = (props) => {
  return (
    <main>
      <ArtistsSection
        artists={props.artists}
      />
      <StudioSection
        photos={props.studioPhotos}
      />
      <About />
    </main>
  );
}

export default Main;