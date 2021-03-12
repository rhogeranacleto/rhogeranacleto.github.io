import { useTranslation } from 'react-i18next';
import { Job } from './job';

export const Jobs = () => {
  const { t } = useTranslation('profile');

  return (
    <section className="jobs">
      <Job
        title={t('software engeneering')}
        description={t('mlabs description')}
        company="Magrathea Labs"
        start={new Date(2019, 3)}
        skills={{
          js: 50,
          react: 20,
          vuejs: 5,
          nodejs: 20,
          cypress: 15,
          ts: 15,
          rubyOnRails: 12,
          rspec: 12,
          pg: 20,
          mongo: 3,
        }}
      />
      <Job
        title={t('software engeneering')}
        description={t('sofit description')}
        company="Sofit Software"
        start={new Date(2016, 9)}
        end={new Date(2019, 3)}
        skills={{
          js: 50,
          emberjs: 50,
          nodejs: 50,
          ts: 40,
          pg: 50,
          mongo: 23,
        }}
      />
      <Job
        title={t('software engeneering')}
        description={t('softin description')}
        company="Softin Sistemas"
        start={new Date(2014, 1)}
        end={new Date(2016, 9)}
        skills={{
          js: 50,
          angularjs: 20,
          jquery: 30,
          csharp: 34,
          sqlserver: 20,
        }}
      />
    </section>
  );
};
