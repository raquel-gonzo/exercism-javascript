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

function decodedValue([color1, color2]) {
  let varColor1 = color1.toLowerCase();
  let varColor2 = color2.toLowerCase();


  // var colors = colorCombo.split(" ")
  // colors.splice(1, 1);

  // let varColor1 = colors[0].toLowerCase();
  // let varColor2 = colors[1].toLowerCase();

  // console.log(varColor1, varColor2);

  if (COLORS.hasOwnProperty(varColor1) && COLORS.hasOwnProperty(varColor2)) {
    let intColorVal1 = parseInt(COLORS[varColor1]);
    let intColorVal2 = parseInt(COLORS[varColor2]);

    return (`${intColorVal1}${intColorVal2}`);
  }
};

// decodedValue("Orange and Orange");
