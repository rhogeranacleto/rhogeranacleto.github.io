import Vib from 'node-vibrant';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Background } from '../Background/Background';
import { IAlbum } from '../interfaces';
import { getTopAlbums } from '../services/get-top-albums';

import './Home.scss';

const setBackground = async (url: string) => {
  const { Vibrant, LightVibrant, DarkVibrant } = await Vib.from(
    url,
  ).getPalette();

  const style = document.createElement('style');

  style.textContent = `html {
    background: linear-gradient(148deg, ${Vibrant?.hex}, transparent),
      linear-gradient(270deg, ${LightVibrant?.hex}, transparent),
      linear-gradient(20deg, ${DarkVibrant?.hex}, transparent);`;

  document.body.appendChild(style);
};

export const Home = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [height, setHeight] = useState(0);
  const foreground = useRef<HTMLDivElement>(null);

  const getAlbums = async () => {
    const data = await getTopAlbums('rhogeranacleto', '10', '1month');

    setAlbums(data);

    setBackground(data[0].image[2]['#text']);
  };

  useEffect(() => {
    getAlbums();

    // Vib.from('https://lastfm.freetls.fastly.net/i/u/300x300/ccb4403c57674285a98c07c382c7172c.png').getPalette().then(v => {
    //   console.log(v.Vibrant?.hex);
    //   console.log(v.DarkVibrant?.hex);
    //   console.log(v.LightVibrant?.hex);

    //   const stype = document.createElement('style');

    //   // stype.textContent = `body { background-color: #0ff; }`;

    //   document.body.appendChild(stype);
    // });
  }, []);

  useEffect(() => {
    setHeight(foreground.current?.offsetHeight as number);
  }, [foreground.current?.offsetHeight]);

  return (
    <>
      {/* <Background height={height} /> */}
      <div className="foreground" ref={foreground}>
        {albums.map((album) => (
          <p>
            <img src={album.image[3]['#text']} key={album.name} className="" />
          </p>
        ))}
      </div>
    </>
  );
};
