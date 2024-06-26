export function formatTime(totalMinutes:number):string {
    if (totalMinutes < 60) {
      return `${totalMinutes} min`;
    } else {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      if (minutes === 0) {
        return `${hours}h`;
      } else {
        return `${hours}h ${minutes}min`;
      }
    }
  }

export function removeDuplicates<T extends Record<string, any>>(
  array: T[], key: string): T[] {
    const map = new Map();
    array.forEach(item => map.set(item[key], item));
    return Array.from(map.values());
  };

export const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#ececec" offset="8%" />
        <stop stop-color="#f5f5f5" offset="18%" />
        <stop stop-color="#ececec" offset="33%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#eee" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>
`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);