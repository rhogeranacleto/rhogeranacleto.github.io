import React, { useState, useEffect } from 'react';
import { IAlbum } from '../interfaces';
import { getTopAlbums } from '../services/get-top-albums';
import './Background.scss';

export const Background = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  const getAlbums = async () => {

    const data = await getTopAlbums('rhogeranacleto', '4', '1month');

    setAlbums(data);
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div id="content">
      <div className="background-images" id="background-images" >
        {/* {albums.map(album => <div style={{
        backgroundImage: `url(${album.image[3]["#text"]})`
      }} >div</div>)} */}
        {albums.map(album => <img src={album.image[3]["#text"]} key={album.name} className="" />)}
      </div>
    </div>
  );
};
