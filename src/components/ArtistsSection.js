import React from 'react';
import Artist from './Artist';

let ArtistsSection = (props) => {
  return (
    <section id="artists">
      <div className="row">
        <div className="col-12">
            <h1>Blakely Studio</h1>
            <h2><em>Artists</em></h2>
        </div>
        <div className="col-12">
          <div className="line"> </div>
        </div>
      </div>

      <div className="row">
        {props.artists.map((artist, index) =>
          <Artist
            img={artist.img}
            name={artist.name}
            url={artist.url}
            key={index.toString()}
          />
        )}
      </div>
    </section>
  );
}

export default ArtistsSection;
    