import './style.scss';
import imgCover from './img-cover-2.jpg';

enum Techs {
  typescript = 'typescript',
  javascript = 'javascript',
  react = 'react',
  react_native = 'react_native',
  redux = 'redux',
  jest = 'jest',
  cypress = 'cypress',
  nodejs = 'nodejs',
  scss = 'scss',
  mongodb = 'mongodb',
  vuejs = 'vuejs',
  mysql = 'mysql',
  postgresql = 'postgresql',
  ruby_on_rails = 'ruby_on_rails',
  typeorm = 'typeorm',
  nestjs = 'nestjs',
  emberjs = 'emberjs',
  angularjs = 'angularjs',
  html = 'html',
  css3 = 'css3'
}

interface IJob {
  name: string;
  avatarUrl: string;
  start: string;
  place: string;
  projects: {
    name: string;
    responsibilities: string[];
    techs: Techs[];
  }[]
}

const jobs: IJob[] = [{
  name: 'Zartis',
  avatarUrl: 'https://media-exp1.licdn.com/dms/image/C4E0BAQFv1kYIAoRw5w/company-logo_200_200/0/1647428819555?e=1668643200&v=beta&t=e8xPocnb-Oh8ild0Fn3oymsRqaD4oqhNOeEyFUu7SuE',
  start: 'june 2021',
  place: 'remote Spain/NY',
  projects: [{
    name: '605',
    responsibilities: [
      'Creating new features for a react application using typescript and redux, following design patterns such as the Single Responsibility Principle, YAGNI, and DRY.',
      'Maintain the UI business logic, performance, and maintainability following the continuous refactoring and continuous improvement principle.',
      'Find, analyze and fix bugs related to business logic and technical issues on the UI application.',
      'Maintain a NodeJS application used as a middleware between the UI and the API.',
      'Help the team to find and pay technical debts.',
      'Help the product team to translate business logic to technical language and describe the ticket cards.',
      'Review the team\'s Pull Request code and help everyone to enhance and follow the teams accorded code design.',
      'Increase test coverage using different types of tests (Unit and e2e)'
    ],
    techs: [Techs.typescript, Techs.react, Techs.redux, Techs.jest, Techs.cypress, Techs.nodejs, Techs.scss, Techs.mongodb]
  }]
}, {
  name: 'Magrathea Labs',
  avatarUrl: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGLOyTOUpVeUQ/company-logo_200_200/0/1647978350295?e=1668643200&v=beta&t=sFUrrqBKVy8xhDE2sN6TlJuhzeOjsy932Pyj-_s_yN4',
  start: 'april 2019',
  place: 'Joinville, Brazil',
  projects: [{
    name: 'UNIMED',
    responsibilities: [
      'Help the team to develop features and fix bugs in Vue, NodeJS, Mongo',
      'Review the team\'s Pull Request code and help everyone to enhance and follow the teams accorded code design.',
      'Increase test coverage using different types of tests (Unit and e2e)'
    ],
    techs: [Techs.javascript, Techs.vuejs, Techs.nodejs, Techs.jest, Techs.mongodb, Techs.mysql, Techs.typeorm]
  }, {
    name: 'ATIVO',
    responsibilities: [
      'Team leader in a small project of NodeJS and React application using Kanban Lean',
      'Create an application to manage sales stock to a sports goods online store.',
      'Review the team\'s Pull Request code and help everyone to enhance and follow the teams accorded code design.',
      'Connect the sales stock application to a few microservices to automatize the stock.',
      'Setup the deployment environment using AWS tools',
      'Increase test coverage using different types of tests (Unit and e2e)'
    ],
    techs: [Techs.typescript, Techs.react, Techs.postgresql, Techs.cypress]
  }, {
    name: 'RDStation',
    responsibilities: [
      'Work in a cross-team along with all the different teams inside the client to get the application in compliance with LGPD (Data Protection General Law in Brazil) and GDPR, implementing features related to privacy data.',
      'Work with the Product Team to understand and translate legal language to technical requirements.',
      'Review the team\'s Pull Request code and help everyone to enhance and follow the teams accorded code design.',
      'Increase test coverage using different types of tests (Unit and e2e)',
    ],
    techs: [Techs.typescript, Techs.react, Techs.postgresql, Techs.ruby_on_rails]
  }, {
    name: 'DalePonto',
    responsibilities: [
      'Software architect in a project for working hours control.',
      'Create the PDD (Product Design Document) and translate that to a Kanban board breaking it down into tickets.',
      'Define the application design for the Frontend, Backend, Mobile app, and Database.',
      'Help the team to create features and fix bugs for the React, Node, and Mobile app',
      'Review the team\'s Pull Request code and help everyone to enhance and follow the teams accorded code design.',
      'Increase test coverage using different types of tests (Unit and e2e)'
    ],
    techs: [Techs.typescript, Techs.nodejs, Techs.nestjs, Techs.postgresql, Techs.cypress, Techs.react_native]
  }]
}, {
  name: 'Sofit Software',
  avatarUrl: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFc_8k9AiItHw/company-logo_200_200/0/1654175112792?e=1668643200&v=beta&t=xHTOBu1D282bONfrpJGjgs4HEb4FEvIdw9WWxmMN31k',
  start: 'october 2016',
  place: 'Joinville, Brazil',
  projects: [{
    name: 'SofitView',
    responsibilities: [
      'Help the team to create new features and fix bugs for the main application.',
      'Review the team\'s Pull Request code and help everyone to enhance and follow the teams accorded code design.'],
    techs: [Techs.javascript, Techs.nodejs, Techs.postgresql, Techs.emberjs]
  }, {
    name: 'SofitView API 2.0',
    responsibilities: [
      'Lead a rewriting of a legacy NodeJS API using recent tools like NestJS and TypeORM, and respecting software design patterns such as DDD and SOLID.',
      'Increase test coverage using different types of tests (Unit and e2e)'],
    techs: [Techs.typescript, Techs.nodejs, Techs.nestjs, Techs.typeorm, Techs.jest]
  }, {
    name: 'SofitView Mobile APP',
    responsibilities: [
      'Maintain a ReactNative app, creating new features and fixing bugs.',
      'Carrying the deployment of new versions of the Mobile app'],
    techs: [Techs.javascript, Techs.react_native, Techs.redux]
  }]
}, {
  name: 'Softin Sistemas',
  avatarUrl: 'https://media-exp1.licdn.com/dms/image/C560BAQF1eQSzW0oKWA/company-logo_200_200/0/1519871860808?e=1668643200&v=beta&t=pxl9z8p9TOqML7087f5mI0iBedLhpqwXEjcaARg55F4',
  start: 'february 2014',
  place: 'Joinville, Brazil',
  projects: [{
    name: 'Gravitten UI',
    responsibilities: [
      'Develop new components and layouts for a UI application made in VanillaJS',
      'Develop new components and layouts for a UI application made in AngularJS'
    ],
    techs: [Techs.javascript, Techs.angularjs, Techs.html, Techs.css3]
  }]
}]

const Job = ({ job }: { job: IJob }) => {
  return <section className='job'>
    <aside>
      {job.projects.map(project => project.techs).flat().map(tech => <mark>{tech} </mark>)
      }
    </aside>
    <figure>
      <img src={job.avatarUrl} />
    </figure>
    <article>
      <h2>{job.name} <sub>{job.place }</sub></h2>
      {job.start}
      {job.projects.map(project => <li>{project.name}<ul>{project.responsibilities.map(j => <li>{j}</li>)}</ul></li>)}

    </article>
  </section>
}

export const ResumePage = () => {
  return <main id='resume'>
    <header>
      <figure>
        <img src={imgCover} />
      </figure>
      <h1>Rhoger Anacleto</h1>
    </header>
    <section>
      <figure />
      <h1>Experience</h1>
    </section>
    <main>

      {jobs.map(job => <Job job={job} />)}

    </main>
  </main>
}