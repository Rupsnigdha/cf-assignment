import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseDate(timestamp: string) {
  const date = new Date(timestamp);
  const day = date.getUTCDate();
  const month = date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
  const year = date.getUTCFullYear().toString().slice(-2);

  const getOrdinalSuffix = (n : number) => {
    if (n >= 11 && n <= 13) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
}

export function parseTime(timestamp : string) {
  const date = new Date(timestamp);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  if (hours === 0 && minutes === 0) {
    return '12 midnight';
  }

  if (hours === 12 && minutes === 0) {
    return '12 noon';
  }

  const suffix = hours >= 12 ? 'PM' : 'AM';
  let displayHour = hours % 12;
  displayHour = displayHour === 0 ? 12 : displayHour;

  const displayMinutes = minutes === 0 ? '' : `:${String(minutes).padStart(2, '0')}`;

  return `${displayHour}${displayMinutes} ${suffix}`;
}