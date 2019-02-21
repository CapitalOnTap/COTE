// from https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
export const hexToRgbA = (hex: string, opacity?: number) => {
  if (!opacity) {
    opacity = 1;
  }

  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ','
    )},${opacity})`;
  }
  throw new Error('Bad Hex');
};

// based on https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
// use this to determine if we should we use white text based on the provided background color
export const isColorDark = (hex) => {
  var c = hex.substring(1);      // strip #
  var rgb = parseInt(c, 16);   // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff;  // extract red
  var g = (rgb >>  8) & 0xff;  // extract green
  var b = (rgb >>  0) & 0xff;  // extract blue

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  // 255 = lightest, 0 = darkest
  if ((r*0.299 + g*0.587 + b*0.114) > 186) {
    return false;
  }

  return true;
};
