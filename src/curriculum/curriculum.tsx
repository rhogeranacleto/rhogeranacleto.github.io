import './locales';
import './curriculum.scss';
import React from 'react';
import { Body } from './body';
import { Header } from './header';
import { Side } from './side';

export const Curriculum = () => (
  <div id="cv">
    <section>
      <Header />
      <Body />
    </section>
    <Side />
  </div>
);
