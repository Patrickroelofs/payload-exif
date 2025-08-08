export function compareObjects(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) { return true; }

  if (obj1 == null || obj2 == null) { return obj1 === obj2; }

  if (typeof obj1 !== typeof obj2) { return false; }

  if (typeof obj1 !== 'object') { return obj1 === obj2; }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) { return false; }

  for (const key of keys1) {
    if (!keys2.includes(key)) { return false; }
    if (!compareObjects(obj1[key], obj2[key])) { return false; }
  }

  return true;
}

export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
