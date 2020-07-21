export function truncate(str, length = 100) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}
