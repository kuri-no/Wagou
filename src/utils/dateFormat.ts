import { format } from '@formkit/tempo';

export const formatDate = (date: string, formatStr = 'YYYY.MM.DD') => {
  if (!date) return '';

  const d = new Date(date);
  return format(d, formatStr);
};

export const getTodayDateInputValue = (timeZone = 'Asia/Tokyo') => {
  return new Intl.DateTimeFormat('en-CA', { timeZone }).format(new Date());
};
