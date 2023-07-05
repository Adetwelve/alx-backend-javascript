export default function cleanSet(set, substring) {
  const array = [];
  if ((set instanceof Set) && (substring.length !== 0)) {
    for (const element of set) {
      if (element.startsWith(substring)) {
        const slicep = element.slice(substring.length);
        array.push(slicep);
      }
    }
  }
  const str = array.join('-');
  return str;
}
