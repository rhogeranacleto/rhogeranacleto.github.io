import { Divider, IDividerProps } from './divider';
import { Skills } from './skils';

interface IJobProps extends IDividerProps {
  title: string;
  description: string;
  company: string;
  skills: { [key: string]: number };
}

export const Job = ({
  title,
  company,
  description,
  start,
  end,
  skills,
}: IJobProps) => (
  <section className="job">
    <Skills skills={skills} />
    <Divider start={start} end={end} />
    <article className="description">
      <h1>{title}</h1>
      <h2>
        {company} <sub>📍 Joinville, Brasil</sub>
      </h2>
      {description.split('\n').map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </article>
  </section>
);
