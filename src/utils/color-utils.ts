const isColorLight = (hexColor: string): boolean => {
  const cleanHex = hexColor.replace("#", "");

  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.5;
};


export { isColorLight }