//mobile number should be a valid Gcash mobile numbr or Paymaya mobile number
export const isMobileNumber = (str) => /^\d{11}$/.test(str);
export const isCharacter = (str) => /^\w[^0-9]+$/g.test(str);
//Username and passwords has to be (8-20 characters) and composed of alphanumeric characters
export const isAlphaNumeric = (str) => /^([a-zA-Z0-9_-]){8,20}$/.test(str);
export const isEmailAddress = (str) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    str
  );
