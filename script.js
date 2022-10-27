/*Write a function that converts HEX to RGB. Then Make that function
auto-dect the formats so that if you enter HEX color format it returns RGB
and if you enter RGB color format it returns HEX. */

let rgbToHex = (r, g, b) => {
  // found this conversion on stackoverflow
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

let hexToRgb = (hex) => {
  //found this conversion on stack overflow
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

let autoConvert = (x, y, z) => {
  let ogData = x;
  if ((x === typeof String && y, z === undefined)) {
    console.log(hexToRgb(x));
    console.log(`"${ogData}"`);
  } else x, y, z === typeof Number;
  let r = x;
  let g = y;
  let b = z;
  {
    console.log(rgbToHex(x, y, z));
    console.log(`(${r}, ${g}, ${b})`);
  }
};

console.log(autoConvert("#ff2281"));
