export function parseDate(date: Date | string | number): Date {
  return typeof date === 'number' || typeof date === 'string' ? new Date(date) : date;
}

export function formatTime(date: Date | number | string): string {
  const parsed = parseDate(date);
  const hour = parsed.getHours().toString().padStart(2, '0');
  const minute = parsed.getMinutes().toString().padStart(2, '0');
  return `${hour}:${minute}`;
}

export function formatDate(date: Date | number | string): string {
  const parsed = parseDate(date);
  const day = parsed.getDate().toString().padStart(2, '0');
  const month = parsed.getMonth().toString().padStart(2, '0');
  const year = parsed.getFullYear();
  return `${day}.${month}.${year}`;
}

export function formatDateTime(date: Date | number | string): string {
  return `${formatDate(date)}, ${formatTime(date)}`;
}
