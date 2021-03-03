import { NowRequest, NowResponse } from '@vercel/node';
import axios from 'axios';
import sharp from 'sharp';
import { getTopAlbums } from '../src/services/get-top-albums';

export default async (request: NowRequest, res: NowResponse) => {
  const albuns = await getTopAlbums('rhogeranacleto', '2', '1month');

  const linkURL = albuns[0].image[3]['#text'];
  console.log(linkURL);

  const { data } = await axios.get(linkURL, { responseType: 'arraybuffer' });

  const maria = await sharp(data).blur(10).toBuffer();

  res.end(maria, 'binary');
};
