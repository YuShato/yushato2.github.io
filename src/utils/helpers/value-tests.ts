export const IsIsset = (/** @type {unknown} */ value: unknown) => Boolean(value);

export const IsArray = (value: any[]) => IsIsset(value) && {}.toString.call(value) === '[object Array]';

export const IsNotEmptyArray = (value: any[]) => IsArray(value) && value.length > 0;

export const IsEmptyArray = (value: any[]) => IsArray(value) && value.length === 0;

export const IsString = (value: string) => typeof value === 'string';

export const IsNotEmptyString = (val: string): boolean => IsString(val) && val.trim() !== '';

export const IsObject = (value: any) => IsIsset(value) && {}.toString.call(value) === '[object Object]';

export const IsNotEmptyObject = (value: object) => IsObject(value) && Object.keys(value).length > 0;

export const IsEmptyObject = (value: object) => IsObject(value) && Object.keys(value).length === 0;

export const IsSet = IsIsset;

export const IsNumber = (value: string | number): boolean =>
  value + '' == '' || (!isNaN(parseFloat(value as string)) && isFinite(parseFloat(value as string)));

export const IsEmptyDescription = (str: string) => {
  if (!str || str === '<p>\r\n   <br>\r\n</p>' || str === '<p><br></p>') {
    return true;
  }

  if (IsNotEmptyString(str)) {
    return false;
  }
};
