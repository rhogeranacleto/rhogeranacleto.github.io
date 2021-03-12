import { format, formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export interface IDividerProps {
  start: Date;
  end?: Date;
}

export const Divider = ({ start, end = new Date() }: IDividerProps) => (
  <div className="divider">
    <span className="end">{formatDistance(start, end, { locale: ptBR })}</span>
    <span className="start">{format(start, 'MMM/yyyy')}</span>
    <span className="line" />
  </div>
);
