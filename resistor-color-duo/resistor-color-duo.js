//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

// export const 
const decodedValue = (color1, color2) => {
  let varColor1 = color1.toLowerCase();
  let varColor2 = color2.toLowerCase();

  if (COLORS.hasOwnProperty(varColor1) && COLORS.hasOwnProperty(varColor2)) {
    let strColorVal1 = COLORS[varColor1].toString();
    let strColorVal2 = COLORS[varColor2].toString();

    console.log(`${strColorVal1}${strColorVal2}`);
  }
};

decodedValue("green", "WHITE");