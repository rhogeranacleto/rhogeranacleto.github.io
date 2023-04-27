import { h, Fragment } from 'preact';
// import profilePicture from './profile.jpeg';
import { Route, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const techs = {
  react:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
};

const jobs = [
  {
    company: {
      text: 'Software Engineer @ Zartis',
      url: 'https://www.zartis.com/',
    },
    period: [new Date(2021, 5)],
    location: 'Spain / Remote',
    content: (
      <>
        <p>
          At Zartis, I have been engaged in two pivotal projects, wherein I
          serve as a Frontend Engineer.
        </p>
        <p>
          The former project catered to a prestigious client,{' '}
          <a href="https://605.tv/">605</a>, wherein I was entrusted with key
          responsibilities such as preserving the application interface,
          incorporating novel features, and debugging.
        </p>
        <p>
          My current project involves a renowned client named{' '}
          <a href="https://www.difc.ae/">DIFC</a>, wherein I assumed the role of
          an architect. As an architect, I am responsible for spearheading the
          frontend architecture, assimilating best design practices and
          optimizing product-side feature development.
        </p>
      </>
    ),
    techs: ['typescript', 'react', 'tailwindcss', 'jest', '.Net', 'playwright'],
  },
  {
    company: {
      text: 'Software Engineer @ Magrathea',
      url: 'https://magrathealabs.com/',
    },
    period: [new Date(2019, 3), new Date(2021, 5)],
    location: 'Joinville, Brazil',
    content: (
      <>
        <p>
          During my time at Magrathea, I had the opportunity to work on various
          projects as a Software Engineer, where I contributed to product
          implementation and worked on both the frontend and backend aspects.
        </p>
        <p>
          One notable project I worked on was for{' '}
          <a href="https://www.rdstation.com/?utm_source=search&utm_medium=cpc&utm_campaign=BR-INB-MULTIPRODUCT-SEARCH-INST-RD_STATION_ONLY_EXACT&utm_content=rd-station_only&utm_term=rd%20station-e&gclid=CjwKCAjwrpOiBhBVEiwA_473dKk33P74GBGwvMXAVEX0fUFFq2iJneP_My6b8yl5wX8qB6hMzCN73RoCD-gQAvD_BwE">
            RDStation
          </a>
          's compliance team, where I implemented the{' '}
          <a href="https://securiti.ai/what-is-lgpd/">LGPD</a> laws on their
          application. It was a challenging and fulfilling experience to
          collaborate with other product teams within a strict timeline.
        </p>
        <p>
          Another project I led was Daleponto, which started as an internal
          solution but later grew into a product that other companies were
          interested in. As the head leader of a small team, I managed the
          product as an independent entity.
        </p>
        <p>
          Furthermore, I was also part of the recruitment team responsible for
          conducting candidate interviews.
        </p>
      </>
    ),
    techs: [
      'typescript',
      'react',
      'vue',
      'ruby',
      'python',
      'nodejs',
      'mongodb',
      'sql',
    ],
  },
  {
    company: {
      text: 'Software Engineer @ Sofit',
      url: 'https://www.sofit4.com.br/',
    },
    period: [new Date(2016, 9), new Date(2019, 3)],
    location: 'Joinville, Brazil',
    content: (
      <>
        <p>
          During my tenure at Sofit, my responsibilities spanned across three
          main areas. Initially, I joined as a FullStack Engineer and focused on
          enhancing the main product by implementing new features and fixing
          general bugs.
        </p>
        <p>
          Subsequently, I transitioned to maintaining a mobile app for several
          months, where I was in charge of ensuring its smooth operation,
          publishing it on stores, and taking care of product implementation.
        </p>
        <p>
          My final accomplishment at Sofit was leading a team responsible for
          rewriting the primary API using new technologies. I played a crucial
          role in designing the API architecture, establishing standards and
          patterns, and guiding my colleagues in navigating the new source code.
        </p>
      </>
    ),
    techs: [
      'typescript',
      'nodejs',
      'react-native',
      'emberjs',
      'NestJS',
      'postgresql',
      'mongodb',
    ],
  },
  {
    company: {
      text: 'Frontend Engineer @ Softin Sistemas',
      url: 'https://softin.com.br/',
    },
    period: [new Date(2014, 1), new Date(2016, 9)],
    location: 'Joinville, Brazil',
    content: (
      <>
        <p>
          During my time at this company, I served as a skilled Frontend
          Engineer with a focus on implementing key product features and
          resolving issues. Additionally, I played an instrumental role in the
          creation of a new brand, contributing to the brand's design and
          successfully bringing it to fruition. This experience proved
          particularly formative, as it represented my first foray into the
          professional world of technology, and provided ample opportunities for
          me to hone my skills and expand my knowledge base.
        </p>
      </>
    ),
    techs: ['javascript', 'jquery', 'css', 'html', 'angularjs'],
  },
];

const getPeriod = ([start, end]: Date[]) => {
  const diff = (end?.getTime() ?? Date.now()) - start.getTime();

  let years = diff / 31536000000;
  const months = Math.floor((years - Math.floor(years)) * 12);
  years = Math.floor(years);

  return (
    <>
      {years} years {months ? `and ${months} months` : ''}
    </>
  );
};

const App = () => (
  <div
    id="app"
    className="grid grid-cols-7 m-auto max-w-screen-lg md:mx-16 mx-5 gap-10 mt-10 text-sm"
  >
    <aside className="lg:col-span-2 col-span-7">
      <header className="lg:text-right text-center flex flex-col">
        <img
          src="../assets/profile.jpeg"
          className="rounded-full mb-6 sm:w-48 w-32 lg:self-end self-center"
        />
        <p>
          Hello! My name is{' '}
          <a href="/" className="text-2xl whitespace-nowrap">
            Rhoger Anacleto
          </a>{' '}
          I'm <span className="bg-slate-200">26 years</span> old and I am a{' '}
          <span className="bg-slate-200 whitespace-nowrap">
            Software Enginner
          </span>{' '}
          with 9+ years of experience
        </p>
        <p>
          I currently live in{' '}
          <a href="https://www.google.com/search?q=florianopolis&oq=florianopolis&aqs=chrome..69i57j46i512j46i175i199i512j0i512l6.3601j0j4&sourceid=chrome&ie=UTF-8">
            Florianópolis, Brazil
          </a>
          , and I work remotely for an outsourcing called{' '}
          <a href="https://www.zartis.com/">Zartis</a> in Spain
        </p>
        <p>
          You can find me at my email{' '}
          <a href="mailto:rhogeranacleto@gmail.com">rhogeranacleto@gmail.com</a>
          , my phone number is <a href="tel:+5547996775457">+5547996775457</a>,
          and my social medias are:{' '}
          <a href="https://www.linkedin.com/in/rhogeranacleto/">Linkedin</a>,{' '}
          <a href="https://www.instagram.com/rhogeranacleto/">Instagram</a>,{' '}
          <a href="https://github.com/rhogeranacleto">Github</a>
        </p>
        <p>
          I speak fluent <span className="bg-slate-200">Portuguese</span> and{' '}
          <span className="bg-slate-200">English</span>. Pero yo ha aprendido un
          poquito de <span className="bg-slate-200">Español</span>,{' '}
          <span className="bg-slate-200">Français</span> y{' '}
          <span className="bg-slate-200">Deutsch</span>
        </p>
      </header>
    </aside>
    <main className="lg:col-span-5 col-span-7">
      <section>
        <h1 className="text-xl border-b-purple-200 border-b-2 border-solid mb-8">
          Professional experience
        </h1>
        {jobs.map((job) => (
          <article
            key={job.company.text}
            className="mt-5 border-b-slate-100 border-b-2 border-solid last:border-none"
          >
            <header className="mb-6">
              <h1>
                <a className="text-2xl" href={job.company.url}>
                  {job.company.text}
                </a>
              </h1>
              <sub>
                during {getPeriod(job.period)} in {job.location}
              </sub>
            </header>
            <main>{job.content}</main>
            <footer className="flex gap-3 my-5 md:flex-nowrap flex-wrap">
              {job.techs?.map((tech) => (
                <code
                  key={tech}
                  className="bg-slate-200 flex items-center whitespace-nowrap"
                >
                  {tech}
                </code>
              ))}
            </footer>
          </article>
        ))}
      </section>
      <section>
        <h1 className="text-xl my-10 border-b-purple-200 border-b-2 border-solid">
          Education
        </h1>
        {[
          {
            institution: {
              name: 'UDESC',
              long: 'University of State of Santa Catarina',
              url: 'https://www.udesc.br/international',
            },
            title: 'Bachalor in System Analisys and Development',
            period: [new Date(2014, 0), new Date(2018, 0)],
            location: 'Joinville, Brazil',
          },
          {
            institution: {
              name: 'SENAI',
              long: 'National School of Industrial Learning',
              url: 'https://sc.senai.br/',
            },
            title: 'Computer Technician',
            period: [new Date(2012, 0), new Date(2014, 0)],
            location: 'Joinville, Brazil',
          },
        ].map((education) => (
          <article key={education.institution.name} className="mt-6">
            <a
              className="text-2xl w-fit block"
              href={education.institution.url}
            >
              <h1 className="mb-5 w-fit">
                {education.title} @ {education.institution.name}
              </h1>
            </a>
            <p>
              This graduation was on{' '}
              <a href={education.institution.url}>
                {education.institution.long}
              </a>{' '}
              starting on {education.period[0].getFullYear()} and graduating on{' '}
              {education.period[1].getFullYear()}, lasting{' '}
              {getPeriod(education.period)} in {education.location}
            </p>
          </article>
        ))}
      </section>
    </main>
  </div>
);

export default App;
