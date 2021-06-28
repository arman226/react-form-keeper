// returns true if value is object
export const isObject = value => {
    return value !== null && typeof value === 'object';
  };
  
  // returns true if value is defined
  export const isDefined = value => {
    return typeof value !== 'undefined';
  };
  
  // returns value is function
  export const isFunction = fn => {
    return typeof fn === 'function';
  };