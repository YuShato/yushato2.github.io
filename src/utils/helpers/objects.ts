/* eslint-disable @typescript-eslint/no-explicit-any */
import { IsString } from './value-tests';

export const isObject = (obj: any) => typeof obj === 'object' && obj !== null;

export const hasOwnProperty = (obj: object, name: string) =>
  isObject(obj) && Object.prototype.hasOwnProperty.call(obj, name);

export const each = (obj: { [key: string]: any }, fn: (key: string, value: any) => void) => {
  for (const index in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, index)) fn(index, obj[index]);
  }
};
export const deepFind = (obj: any, path: string) => {
  if (!obj || !isObject(obj) || !path || !IsString(path)) {
    return undefined;
  }

  // eslint-disable-next-line prefer-const
  let paths = path.split('.'),
    current = obj,
    i;

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] == undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
};

export const getValue = (obj: object, path: string, def: any) => {
  const value = deepFind(obj, path);

  if (value === undefined) {
    return def;
  }

  return value;
};
