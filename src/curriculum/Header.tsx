import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation('cv');

  return (
    <section className="header">
      <div>
        <h1>Rhoger Anacleto</h1>
        <h2>{t('young enthusiast')}</h2>
      </div>
    </section>
  );
};
