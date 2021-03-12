import { useTranslation } from 'react-i18next';

interface IJob {
  title: string;
}

const Job = ({ title }: IJob) => {
  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
};

export const Jobs = () => {
  const { t } = useTranslation('cv');

  return (
    <section>
      <h1>{t('experience')}</h1>
      <Job title="Software engeneer" />
      <Job title="Fullstack developer" />
      <Job title="Frontend developer" />
    </section>
  );
};
