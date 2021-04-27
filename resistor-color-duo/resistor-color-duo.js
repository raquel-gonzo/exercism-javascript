
//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function decodedValue(colorCombo) {

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


  let varColor1 = colorCombo[0].toLowerCase();
  let varColor2 = colorCombo[1].toLowerCase();


  if (COLORS.hasOwnProperty(varColor1) && COLORS.hasOwnProperty(varColor2)) {
    let answer = "";
    let intColorVal1 = COLORS[varColor1];
    let intColorVal2 = COLORS[varColor2];
    answer = `${intColorVal1}${intColorVal2}`

    return(parseInt(answer));
  }
};
