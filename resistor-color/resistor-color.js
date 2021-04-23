//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.

export const colorCode = (color) => {
  let x = color.toLowerCase();
  if (COLORS.hasOwnProperty(x)) {
    return x, COLORS[x];
  }
};

export const COLORS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  Yellow: 4,
  Green: 5,
  Blue: 6,
  Violet: 7,
  Grey: 8,
  White: 9,
};
