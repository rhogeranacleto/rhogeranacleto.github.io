import './locales';
import './Curriculum.scss';
import { Body } from './Body';
import { Header } from './Header';
import { Side } from './Side';

export const Curriculum = () => (
  <div id="cv">
    <section>
      <Header />
      <Body />
    </section>
    <Side />
  </div>
);

