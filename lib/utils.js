import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone) {
  // Basic international phone validation
  const re = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
  return re.test(phone);
}
