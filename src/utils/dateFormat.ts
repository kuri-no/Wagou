import { format } from '@formkit/tempo';

export const formatDate = (date: string, formatStr = 'YYYY.MM.DD') => {
  if (!date) return '';

  const d = new Date(date);
  return format(d, formatStr);
};
