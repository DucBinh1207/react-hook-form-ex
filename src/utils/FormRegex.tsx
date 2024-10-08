import { Regex } from "./Constant";

export function IsRequired(value: string) {
  return value.length > 0;
}

export const IsName = (value: string) => {
  return Regex.name.test(value);
};

export const IsEmail = (value: string) => {
  return Regex.email.test(value);
};

export const IsPin = (value: string) => {
  return Regex.pin.test(value);
};

export const IsPhone = (value: string) => {
  return Regex.phone.test(value);
};
